import { S3Client } from "@aws-sdk/client-s3";
import { access } from "fs";

const s3Client = new S3Client ({
    credentials: {
        accessKeyId: "648c144fef9c056c8aff68dac9199bdc",
        secretAccessKey:"ee0360d7a73249815877cffdcb563f8fd2749131aa21b536abdc54aba2233379"
    },
    endpoint:"https://izthrfhjolgofvdkohhd.supabase.co/storage/v1/s3",
    region: "ap-southeast-1",
    forcePathStyle: true
});