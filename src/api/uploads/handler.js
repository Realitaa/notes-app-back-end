class UploadsHandler {
  constructor(service, validator) {
    this.service = service;
    this.validator = validator;

    this.postUploadImageHandler = this.postUploadImageHandler.bind(this);
  }

  async postUploadImageHandler(request, h) {
    const { data } = request.payload;
    this.validator.validateImageHeaders(data.hapi.headers);

    // // get local file name after write file
    const filename = await this.service.writeFile(data, data.hapi);

    // Get full AWS URL if using AWS S3 as storage
    const bucketName = process.env.AWS_BUCKET_NAME;
    const bucketRegion = process.env.AWS_REGION;

    const response = h.response({
      status: 'success',
      data: {
        fileLocation: `https://${bucketName}.s3.${bucketRegion}.amazonaws.com/${filename}`,
      },
    });

    // get full URL of uploaded local resource
    // const fileLocation = await this.service.writeFile(data, data.hapi);

    // const response = h.response({
    //   status: 'success',
    //   data: {
    //     fileLocation,
    //   },
    // });
    response.code(201);
    return response;
  }
}

module.exports = UploadsHandler;
