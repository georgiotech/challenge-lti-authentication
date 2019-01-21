# Bibliotech Coding Challenge

This challenge was designed to give us a means to assess:

- Your familiarity with ORMs and working with data in a database. We've chosen Sequelize for the ORM and sqlite3 for the database
- Your ability to implement access controls
- If you understand routing in an Express.js application
- Your ability to write integrations with a third party authentication standard
- What you pay attention to when writing your code

Please clone this repository and send through your completed coding challenge using whatever you feel fit. We'll take a look at it and review it like we would a pull request. Thanks for taking the time.

## The task

Some institutions provide access to a library of books to all of their students. In order for a student to gain access to this library we have to determine their affiliation with an institution. That way, a student from University of the East will automatically be granted access to the books provided by their institution. The way we have chosen to allow this is to allow LTI integration with 3 specific institutions. Your task is to set up the integration, and where there are gaps in the instructions, come back with a solution.

The requirements are:

1. The following titles should be available to users, based on their institution:

   - University of the East
     - students
       - 9781351831215, 9781317963974
     - academics:
       - 9781351831215, 9781317963974, 9781317671299, 9781317308737, 9781498723305
   - University of the South-West
     - all:
       - 9781351831215, 9781136559860, 9781317963974, 9781351831321, 9781351679725, 9781136547614, 9781498723305
   - University of the North
     - all:
       - 9781136559860, 9781317963974, 9781317671299, 9781351831321, 9781482261806, 9781351679725

2. Only students/academics from University of the East, University of the South-West, and University of the North can use LTI integration to authenticate and they will always authenticate via LTI protocol.
3. Create a test suite which includes code coverage, to unit and integration test the routes you’ve created
4. Expose the following endpoints through [Express](https://expressjs.com/):

    4.1 `POST /users/lti` Authenticates if the LTI information received matches an existing User. Otherwise creates a new user and authenticates provided the institution is recognised.
    4.3 `GET /books` Once authenticated, responds with a JSON object containing a list of Books that the user has access to via their Institution.
    4.4 `GET /books/:isbn` Once authenticated, responds with either a success or failure message depending on if the user can access the requested isbn
5. Make any required changes to the database if you'd like but be careful not to make breaking changes
6. (Optional) Provide a [Postman](https://www.getpostman.com/) collection which performs some basically functionality on the routes you've created.

## What is provided

1. We have provided you a basic structure for a working Express.js application. You should be able to run the server with `npm start` and confirm it works by sending `GET http://localhost:3000/`
2. `npm run init-db` will create a preconfigured sqlite3 database at `./sqlite3.db` with bare-bones tables for:
    - `User` with fields for `name`, `email`, `password` - No existing users, but to be used to create a user profile for each new LTI user
    - `Institution` with fields for `name` - Only the 3 defined institutions are allowed to use LTI signins
    - `LTIConsumer` with fields for `consumerSecret`, `consumerKey` - empty table to be used for configuring LTI authentication at institutional level
    - `Book` with fields for `isbn`, `title` - Only these 10 books are available
  
    Assume that `sqlite3.db` mirrors the production database and that any breaking changes to the schema will result in problems.
3. An example request that could come in can be found at `mocks/lti-example.json`

## Out of scope for this challenge

We'd like to help keep you focussed on creating the access controls and LTI authentication. The following are explicitly not required:

1. Any front-end UI. It will suffice to return a response with the data a front-end would require.

## Useful resources

- [LTI Consumer Emulator](https://ltiapps.net/test/tc.php) - can be used to generate the types of HTTP requests that will be received
- [ims-lti](https://www.npmjs.com/package/ims-lti) npm package that deals with lti requests

## Things to keep in mind

- Security
- Scalability
- Consistency
- Testing

## Running this application

You can run the application by typing:
`npm install` followed by `npm start`
