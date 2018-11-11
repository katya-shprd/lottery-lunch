# Lottery Lunch API

This project provides a simple API for the Lottery Lunch project

The back-end is built using [Node.js](https://nodejs.org/) + [Express](http://expressjs.com/) + [PostgreSQL](https://www.postgresql.org/)

## Dependencies

Please follow the official documentation of Node.js and Express for installation. Then to install the necessary NPM modules:

```sh
npm install
```

## Running

The back-end could be run directly as follows:

```sh
node app.js
```

or using [nodemon](https://nodemon.io/):

```sh
nodemon app.js
```

By default the back-end is available at http://localhost:5000. To change the port number, set it to the value of the environment variable `PORT`, e.g.

```sh
PORT=8080 node app.js
```

## API documentation

Currently the back-end exposes `GET`,`POST` and `DELETE` end-points:

`GET` end-point:
`/api/emails/all`, returning a JSON response of format:

```json
    {
        "participant_id": <id>,
        "first_name": "First Name",
        "last_name": "Last Name",
        "email": "email address",
        "comment": "comment"
    },
```

`POST` end-point:
`/api/emails/add`, adding new data to database

`GET` end-point:
`/api/emails/:id` , deleting data by id
