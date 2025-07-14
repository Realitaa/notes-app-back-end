# Notes App Back End

Source code for Notes App used by Dicoding Academy at course **Learn Back-End Fundamentals with Javascript**. Following the tutorial, this is the first version of the notes app back end after reworking the project from just a CRUD at course **Learn Back-End Basic with Javascript**.

## What's new in v1?

1. `9a500f3`: Restructuring project with Hapi plugin.
    We use Hapi advantages to use plugin in our code. This makes code more modular and better maintainability. Dividing handler and routes into api and make it become a plugin.
2. `432ee93`: Using [Joi](https://joi.dev/) as payload validation.
3. `fc899cb`: Implementing custom error message to hapi `onPreResponse` lifecycle. It allow handler to focus on logic.
4. `5c64bfe`: Using _environtment variable_ (.env) to store sensitive server variable.
5. `6acbfba`: Making database migration for easier table creation on new environtment.
6. `74e2bd2`: Using services for database logic. It causes handler to handle only business logic.
7. `36a4f3d`: Implementing Postgres as RDBMS to application.

## Folder Structure

1. [`migration`](migrations/) > Database migration file.
2. [`src/api/`](src/api/) > Routes and bussiness logic.
3. [`src/exceptions/`](/src/exceptions/) > Custom exceptions.
4. [`src/services/inMemory/`](/src/services/inMemory/NotesService.js) > Memory based storage using array.
5. [`src/services/postgres/`](/src/services/postgres/NotesService.js) > RDBMS based storage using Postgres.
6. [`src/utils/`](src/utils/) > Server utilities.
7. [`src/validator/`](src/validator/) > Payload validation.

## Instalation

1. Clone this version

```sh
git clone https://github.com/Realitaa/notes-app-back-end/tree/v1/
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

5. Create database in your local and run the migration

```sh
npm run migration up
```

6. Run server

```sh
npm run dev
# Or
npm run start
```

## Closing

Thank you Dicoding Indonesia for making this course.