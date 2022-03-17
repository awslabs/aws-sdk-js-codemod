import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { S3 } from "@aws-sdk/client-s3";

const dynamodbClient = new DynamoDB({ region: "us-west-2" });
const s3Client = new S3({ region: "us-west-2" }); 