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
        -> POST: create new User from a JSON given in the body of the request
    '/api/v1/profiles/uid/:userID' 
        -> GET: search for User by ID given in the URL
        -> PUT: search for User by ID given in the URL and change with a JSON given in the body of the request
        -> DELETE: search for User by ID given in the URL and delete
    '/api/v1/profiles/name/:name'
        -> GET: search for User by name given in the URL

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