/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
// Docs: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html

const {
  S3Client,
  PutObjectCommand,
} = require('@aws-sdk/client-s3');

class StorageService {
  constructor() {
    this.client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
    this.bucketName = process.env.AWS_BUCKET_NAME;
  }

  async writeFile(fileStream, meta) {
    const baseFilename = +new Date() + meta.filename;

    try {
      // Convert stream to buffer
      const chunks = [];
      for await (const chunk of fileStream) {
        chunks.push(chunk);
      }
      const buffer = Buffer.concat(chunks);

      const uploadCommand = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: baseFilename,
        Body: buffer,
        ContentType: meta.mimetype || 'application/octet-stream',
      });

      await this.client.send(uploadCommand);

      return baseFilename;
    } catch (error) {
      throw new Error('Error uploading files to S3', error);
    }
  }
}

module.exports = StorageService;
