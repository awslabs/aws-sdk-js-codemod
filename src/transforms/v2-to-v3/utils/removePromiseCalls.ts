import { Collection, Identifier, JSCodeshift, MemberExpression } from "jscodeshift";

export interface RemovePromiseCallsOptions {
  v2ClientName: string;
  v2DefaultModuleName: string;
}

// Removes .promise() from client API calls.
export const removePromiseCalls = (
  j: JSCodeshift,
  source: Collection<unknown>,
  { v2DefaultModuleName, v2ClientName }: RemovePromiseCallsOptions
): void => {
  source
    .find(j.VariableDeclarator, {
      id: { type: "Identifier" },
      init: {
        type: "NewExpression",
        callee: {
          object: { type: "Identifier", name: v2DefaultModuleName },
          property: { type: "Identifier", name: v2ClientName },
        },
      },
    })
    .forEach((nodePath) => {
      const name = (nodePath.value.id as Identifier).name;
      source
        .find(j.CallExpression, {
          callee: {
            type: "MemberExpression",
            object: {
              type: "CallExpression",
              callee: {
                type: "MemberExpression",
                object: {
                  type: "Identifier",
                  name,
                },
              },
            },
            property: { type: "Identifier", name: "promise" },
          },
        })
        .forEach((callExpressionPath) => {
          switch (callExpressionPath.parentPath.value.type) {
            case "AwaitExpression":
              callExpressionPath.parentPath.value.argument = (
                callExpressionPath.value.callee as MemberExpression
              ).object;
              break;
            case "MemberExpression":
              callExpressionPath.parentPath.value.object = (
                callExpressionPath.value.callee as MemberExpression
              ).object;
              break;
            case "VariableDeclarator":
              callExpressionPath.parentPath.value.init = (
                callExpressionPath.value.callee as MemberExpression
              ).object;
              break;
            default:
              throw new Error(
                `Removal of .promise() not implemented for ${callExpressionPath.parentPath.value.type}`
              );
          }
        });
    });
};
