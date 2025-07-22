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
    // const filename = await this.service.writeFile(data, data.hapi);

    // const response = h.response({
    //   status: 'success',
    //   data: {
    //     fileLocation: `http://${process.env.HOST}:${process.env.PORT}/upload/images/${filename}`,
    //   },
    // });

    // get full URL of uploaded resource
    const fileLocation = await this.service.writeFile(data, data.hapi);

    const response = h.response({
      status: 'success',
      data: {
        fileLocation,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = UploadsHandler;
