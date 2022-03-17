import AWS from "aws-sdk";

const documentClient = new AWS.DynamoDB.DocumentClient(
  { region: "us-east-1" }
);
