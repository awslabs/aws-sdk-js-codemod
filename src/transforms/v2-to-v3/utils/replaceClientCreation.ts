import { Collection, JSCodeshift } from "jscodeshift";

export interface ReplaceClientCreationOptions {
  v2ClientName: string;
  v3ClientName: string;
  v2DefaultImportName: string;
}

// Replace v2 client creation with v3 client creation.
export const replaceClientCreation = (
  j: JSCodeshift,
  source: Collection<any>,
  { v2DefaultImportName, v2ClientName, v3ClientName }: ReplaceClientCreationOptions
): void => {
  source
    .find(j.NewExpression, {
      callee: {
        object: { type: "Identifier", name: v2DefaultImportName },
        property: { type: "Identifier", name: v2ClientName },
      },
    })
    .replaceWith((nodePath) => {
      const { node } = nodePath;
      node.callee = j.identifier(v3ClientName);
      return node;
    });
};