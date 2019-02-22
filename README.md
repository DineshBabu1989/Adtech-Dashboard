# ADTech Dashboard - Tech stack React, Redux, Node.js & Postgres SQL Db
The application is primarily a dashboard that displays ad-tech data (ie: campaigns, performance, campaign reports) in the form of stat cards, tables, and charts. 

## Getting Started

The application requires a local Postgres installation for functioning, on the other hand, you use can also tweak in and modify the routes.js to work with any relational database of your choice.

Step:1 You can install the lightweight  Postgres app https://postgresapp.com/, downside - you can access it only via CLI.

Step:2 Create a Postgres user, if the user is not a superuser, you need to give the user special permissions to create databases and read local CSV files, here I have given the user dinesh_babu special permissions.

Note: Certain permissions have to be given only from superuser login.

```
ALTER USER dinesh_babu CREATEDB; //gives a user the ability to create new databases

GRANT pg_read_server_files TO dinesh_babu; //gives a user the ability to read local CSV, needs superuser login

```
Now the user has special permissions as you can see in the screenshot below

![screenshot 2019-02-21 at 16 14 10](https://user-images.githubusercontent.com/35486337/53180410-d1862580-35f5-11e9-87ac-58f3409d4674.png)

Step:3 Now clone the git repo 

```
git clone https://github.com/DineshBabu1989/kayzen-challenge.git

```

Step:4 Modify the config/keys file with your postgres credentials

```
module.exports = {
    user: YOUR_USER_NAME
    password: YOUR_PASSWORD
    database: YOUR_DATABASE_NAME
    host: 'localhost',
    port: 5432,
};

```
Step:5 Install node modules for client and server by running

```
npm run client-install

npm install

```

Step:6 Seed the database and run the project locally

```
npm run seedDb 

npm run dev

```

## Architecture of the application

- React on the front end to render UI, trigger actions, consume state as props
- Redux manages UI state and data from RESTful APIs
- Actions contain API calls to predefined API endpoints
- Reducers contain UI state, data from API calls in the form of an array of objects, objects.

## Notable points about the project

- The concept of a single store and unidirectional data flow based redux architecture is followed
- The project uses semantic HTML in react using react fragment tags and BEM for naming HTML elements.
- The project has SASS set up for easing modularisation and maintainability of CSS.
- The app is fully responsive on all browsers and devices, 
- The application uses FLEX-BOX to achieve responsive behavior and its free from CSS frameworks of any sort.
- The error handling is taken into consideration and separate reducers are used to handle errors gracefully in the front-end.

## Prerequisities

- You need to have node.js installed in your system.
- URL: https://nodejs.org/en/

## Built With

- React, Redux, SASS, FLEX-BOX
- Node.js, Postgres SQL

## Screen shots 


![screenshot 2019-02-22 at 14 35 30](https://user-images.githubusercontent.com/35486337/53245829-276ad400-36af-11e9-80c8-121745f8c9b1.png)


![screenshot 2019-02-21 at 18 34 51](https://user-images.githubusercontent.com/35486337/53189670-5712d100-3608-11e9-8206-ff621e2c7663.png)


![screenshot 2019-02-21 at 18 35 29](https://user-images.githubusercontent.com/35486337/53189718-6eea5500-3608-11e9-9eff-7ba93ac498c0.png)


![screenshot 2019-02-21 at 18 38 12](https://user-images.githubusercontent.com/35486337/53189749-81648e80-3608-11e9-9530-ce366b6220b7.png)

## Authors

- DINESH.B - FULL STACK DEVELOPER

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
