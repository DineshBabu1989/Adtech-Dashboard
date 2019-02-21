# ADTech Dashboard - based on React, Redux, Node.js & Postgres SQL Db

The project involves a full stack application with react, redux on the front end and node.js, postgres db on the back-end. The application is primarly a dashboard that displays adtech data (ie: campaigns, performance, campaign reports) in the form of stat cards, tables and charts. 

## Getting Started

The application requires a local postgres installation for functioning, on the other hand you use can also tweek in and modify the routes.js to work with any relational database of your choice.

step:1 you can install the light weight  postgres app https://postgresapp.com/, downside - you can access it only via cli.

step:2 create a postgres user, if the user is not a super user, you need to give the user special permissions to create databases and read local CSV files, here i have given the user dinesh_babu special permissions.

Note: certain permissions have to be given only from super user login.

```
ALTER USER dinesh_babu CREATEDB; //gives user the ability to create new databases

GRANT pg_read_server_files TO dinesh_babu; //gives user the ability to read local CSV, needs super user login

```
Now the user has special permissions as you can see in the screenshot below

![screenshot 2019-02-21 at 16 14 10](https://user-images.githubusercontent.com/35486337/53180410-d1862580-35f5-11e9-87ac-58f3409d4674.png)

step:3 now clone the git repo 

```
git clone https://github.com/DineshBabu1989/kayzen-challenge.git

```

step:4 modify the config/keys file with your postgres credentials

```
module.exports = {
    user: YOUR_USER_NAME
    password: YOUR_PASSWORD
    database: YOUR_DATABASE_NAME
    host: 'localhost',
    port: 5432,
};

```
step:5 install node modules for client and server by running

```
npm run client-install

npm install

```

step:6 seed the database and run the project locally

```
npm run seedDb 

npm run dev

```

## Architecture of the application

- React on the front end to render UI, trigger actions, consume state as props
- Redux manages UI state and data from RESTful APIs
- Actions contain API calls to predefined API end points
- Reducers contain UI state, data from API calls in the form of array of objects, objects.

## Notable points about the project

- The concept of a single store and unidirectional data flow based redux architecture is followed
- The project uses semantic HTML in react using react fragment tags and BEM for naming HTML elements.
- The project has SASS set up for easing modularisation and maintainability of CSS.
- The app is fully responsive on all browsers and devices, 
- The application uses FLEX-BOX to achieve responsive behaviour and its free from CSS frame works of any sort.
- The error handling is taken in to consideration and separate reducers are used to handle errors gracefully in the front-end.

## Prerequisities

-You need to have node.js installed in your system.
--URL: https://nodejs.org/en/

## Built With

- React, Redux, SASS, FLEX-BOX
- Node.js, postgres SQL

## Screen shots 

Large devices
![screenshot 2019-02-21 at 18 34 11](https://user-images.githubusercontent.com/35486337/53189597-3185c780-3608-11e9-8035-97600de67a01.png)

Medium devices
![screenshot 2019-02-21 at 18 34 51](https://user-images.githubusercontent.com/35486337/53189670-5712d100-3608-11e9-8206-ff621e2c7663.png)

Smaller devices
![screenshot 2019-02-21 at 18 35 29](https://user-images.githubusercontent.com/35486337/53189718-6eea5500-3608-11e9-9eff-7ba93ac498c0.png)


![screenshot 2019-02-21 at 18 38 12](https://user-images.githubusercontent.com/35486337/53189749-81648e80-3608-11e9-9530-ce366b6220b7.png)

## Authors

- DINESH.B - FULL STACK DEVELOPER

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
