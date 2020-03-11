Profile Service for a ToDo App in use of Microservice Architecture:

Languages and Frameworks:
    nodejs and expressjs

Structure:
    -app.js
    -models -> db-models.js
    -router -> users.js

Port:
    3000

All Endpoints:
    '/' 
        -> Hello World!
    '/api/v1/profiles/' 
        -> GET: list all existing users
    /api/v1/profiles/:userID'/ 
        -> GET: search for User by ID given in the URL
        -> POST: create new User from a JSON given in the body of the request
        -> PUT: search for User by ID given in the URL and change with a JSON given in the body of the request
        -> DELETE: search for User by ID given in the URL and delete

Database:
    MongoDB
    "mongodb+srv://dbUser:start123@todo-profilesvc-sprud.mongodb.net/test?retryWrites=true&w=majority"
    User: dbUser
    PW: start123

DB Models:
    UserData:
    {
        "_id": String,
        "name": String,
        "roles": String,
        "description": String
    }