# Notes App Back End V2

Source code for Notes App used by Dicoding Academy at course **Learn Back-End Fundamentals with Javascript**. Following the tutorial, this is the first version of the notes app back end after reworking the project from just a CRUD at course **Learn Back-End Basic with Javascript**.

## What's new in v2?

1. `c9b217f`: Add users feature. Why? Of course for private notes and collaborations.
2. `f520f7e`: Authentication (login) feature.
3. `d0a4947`: Authorization feature. This brings private notes feature.
4. `9382d2c`: Collaboration feature. Note owner can give other user access to note after adding them as collaborator.

## Folder Structure

1. [`migration`](migrations/) > Database migration file.
2. [`src/api/`](src/api/) > Routes and bussiness logic.
3. [`src/exceptions/`](/src/exceptions/) > Custom exceptions.
4. [`src/services/inMemory/`](/src/services/inMemory/NotesService.js) > Memory based storage using array.
5. [`src/services/postgres/`](/src/services/postgres/NotesService.js) > RDBMS based storage using Postgres.
6. [`src/tokenize/TokenManager.js`](src/tokenize/TokenManager.js) > Token manager for JWT Authentication.
7. [`src/utils/`](src/utils/) > Server utilities.
8. [`src/validator/`](src/validator/) > Payload validation.

## Instalation

1. Clone this version

    ```sh
    git clone https://github.com/Realitaa/notes-app-back-end/tree/v2/
    ```

2. Move to source code directory, then install the dependencies

    ```sh
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

    Copy each of them to `ACCESS_TOKEN_KEY` and `REFRESH_TOKEN_KEY`.

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

## Testing

1. Open Postman.
2. Import collection and environtment in folder [`test`](test/).
3. Choose Notes API Test as your environtment test.
4. Run collection test.

## Closing

Thank you Dicoding Indonesia for making this course.