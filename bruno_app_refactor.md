### bruno app refactor

- **ENTITIES**:

  - users

    ```json
    {
      "users": {
        "id": "uuidv4",
        "name": "string",
        "lastname": "string",
        "age": "int",
        "role": "string",
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
        "deletedAt": "timestamp"
      }
    }
    ```

  - tickets:

    ```json
    {
      "tickets": {
        "id": "uuidv4",
        "flight_code": "string",
        "city": "string",
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
        "deletedAt": "timestamp"
      }
    }
    ```

  - troubleshooting:

    ```json
    {
      "troubleshooting": {
        "id": "uuidv4",
        "ticket_id": "fk::tickets::string",
        "user_id": "fk::user::string",
        "info": "string",
        "state": "string",
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
        "deletedAt": "timestamp"
      }
    }
    ```

### Endpoints

- **Public endpoints**

  - `GET /test` status 200

    ```json
    {
      "msg": "'I'm alive!"
    }
    ```

  - `POST /login` status 200 || status 422

    ```json
    // 200
    {
        "user": {
            "id": "uuidv4",
            "name": "string",
            "lastname": "string",
            "age": "int",
            "role": "string",
            "token": "string"
        },
        "meta": {}
    }

    // 422
    {
        "user":{},
        "meta": {
            "info": "Malformed json"
        }
    }
    ```

  - `POST /register` 200 || 422

    ```json
    // 200
    {
        "user": {
            "id": "uuidv4",
            "name": "string",
            "lastname": "string",
            "age": "int",
            "role": "string"
        },
        "meta": {}
    }

    // 422
    {
        "user":{},
        "meta": {
            "info": "Malformed json"
        }
    }
    ```

- **Private endpoints**

  - `POST /ticket`
  - `GET /ticket`
  - `PATCH /ticket`
  - `POST /troubleshooting`
  - `GET /troubleshooting`
  - `PATCH /troubleshooting`

### TODO.

#### AuthService

- test authHandler: return a promise with the data processed. In this case that's mean that we must return the same data but with the JWT token.
- test AuhRouter, if jwt is returner, then send a success response. In this case the response must have status 200.
- test all the route from the begining to ensure that the endpoint works as expected.

#### BrunoApp

* decoupling logic from the routes and the handlers.
* includes object schema validation inside the router/routers.
* test the endpoints and the handlers.
* the handlers must only receive the data thats is already validated. If so, then return the data inserted on the db with a status message.
* test the handlers and the reception of the data.
* user docker internal network to configure the microservices comunication.
* implement all crud operations related to all the entities.