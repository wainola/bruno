### bruno app refactor

* **ENTITIES**:

  * users

    ```json
    {
        "users": {
            "id": "uuidv4",
            "name": "string",
            "lastname": "string",
            "age": "int",
            "role": "string",At:
            "createdAt": "timestamp",
            "updatedAt": "timestamp",
            "deletedAt": "timestamp"
        }
    }
    ```

  * tickets:

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

  * troubleshooting:

    ```json
    {
        "troubleshooting":{
            "id": "uuidv4",
            "ticket_id": "fk::tickets::string",
            "user_id": "fk::user::string",
            "info":"string",
            "state": "string",
            "createdAt": "timestamp",
            "updatedAt": "timestamp",
            "deletedAt": "timestamp"
        }
    }
    ```

### Endpoints

* **Public endpoints**
  * `GET /test`  status 200

    ```json
    {
        "msg": "'I'm alive!"
    }
    ```

  * `POST /login` status 200 || status 422

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

  * `POST /register`  200 || 422

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

* **Private endpoints**

  * `POST /ticket`
  * `GET /ticket`
  * `PATCH /ticket`
  * `POST /troubleshooting`
  * `GET /troubleshooting`
  * `PATCH /troubleshooting`