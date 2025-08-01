# Notes App Back End V3

Source code for Notes App used by Dicoding Academy at course **Learn Back-End Fundamentals with Javascript**.

## What's new in v3?

1. `0f9bb7f`: Add export notes using message broker `RabbitMQ`.
2. `1842f51`: Implemented local file upload.
3. `9c84dc6`: Implemented server side caching with Redis.
4. `257e89c`: Implemented AWS S3 as cloud storage as alternative for local file upload.

## Prerequisite

1. Modern NodeJS (Personally using v23.4).
2. PostgreSQL.
3. RabbitMQ
4. Redis
5. AWS account if you want to use S3 cloud storage as alternative for local file upload.

## Folder Structure

1. [`migration`](migrations/) > Database migration file.
2. [`src/api/`](src/api/) > Routes and bussiness logic.
3. [`src/exceptions/`](/src/exceptions/) > Custom exceptions.
4. [`src/services/`](/src/services/) > Server services such as Postgres, S3, Redis, etc.
5. [`src/tokenize/TokenManager.js`](/src/tokenize/TokenManager.js) > JWT token manager.
6. [`src/utils/`](src/utils/) > Server utilities.
7. [`src/validator/`](src/validator/) > Payload validation.
8. [`test/`](test/) > Postman test files.
9. [`src/server.js`](src/server.js) > Server entry point.

## Instalation

1. Clone the project

    ```sh
    git clone https://github.com/Realitaa/notes-app-back-end/
    ```

2. Move to source code directory, then install the dependencies

    ```sh
    cd notes-app-back-end
    npm install
    ```

3. Copy paste the _environtment variable_

    ```sh
    cp .env.example .env
    ```

4. Open `.env` file and fill the variable based on your local environtment.

5. In `.env` file, add JWT Token with random string using `crypto` module in node REPL. (You can open other terminal to do this)

    ```sh
    node
    require('crypto').randomBytes(64).toString('hex');
    require('crypto').randomBytes(64).toString('hex');
    ```

    Copy each of the output and paste it to `ACCESS_TOKEN_KEY` and `REFRESH_TOKEN_KEY`.

6. Create database in your local and run the migration

    ```sh
    npm run migration up
    ```

7. Run server

    ```sh
    npm run dev
    # Or
    npm run start
    ```

## Message Broker

This project uses message broker for `export` feature. The repository for message broker consumer can be find [here](https://github.com/Realitaa/notes-app-queue-consumer).

## Testing

1. Open Postman.
2. Import collection and environtment in folder [`test`](test/).
3. Choose Notes API Test as your environtment test.
4. Run collection test.

## Closing

Thank you Dicoding Indonesia for making this course.