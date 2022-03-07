import { S3, waitUntilBucketExists } from "@aws-sdk/client-s3";

const Bucket = "BUCKET_NAME";
const client = new S3({ region: "REGION" });

await client.createBucket({ Bucket });
await waitUntilBucketExists({ client, maxWaitTime: 60 }, { Bucket });