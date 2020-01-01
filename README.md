# ReactJs CAR Application Front end 

## Prerequisite
* Nodejs v6+
* yarnpkg (optional)


## Getting Started
```sh
git clone  path

cd path

yarn install
    or
npm install

yarn start
    or
npm start
```

Open [http://localhost:3000](http://localhost:3000)<br>

This is the front end of the car application which was given as an assignment from RHKDHV. The front end code is in ReactJS . The project uses Redux for state management and has different components like there is one to add a new car, one to view the list of cars, one to get the list of cars as per annual cost . Each component has unit tests written for it . 

To run the code , you need to do the following :
1. make sure latest node and npm is installed . 
2. Clone the repository https://github.com/dixitank/ReactJSCarApp.git from github .
3. Run npm install in the project directory.
4. Run npm start in the project directory to start the server .
5. The application will be rendered at post 3000 and can be browsed like http://localhost:3000
6. This front end will be talking to the backend written using Spring boot . In order to make them talk, you need to bring up the back end server first with the steps mentioned here : https://github.com/dixitank/JavaCarAppBackEnd.git
7. Once the back end server is running and the front end server is running, you can start adding car details and the same will be saved by consuming the back end APIs written in Java.
8. Run npm test to run all the unit tests .
9. Run run build for a production build .
10. This project uses redux for state management with proper actions and reducers defined , so that state is well managed when the application will grow in future . 

## Major Libraries used
* ReactJs
* Redux
* create-react-app
* React Router 4
* Bootstrap 4
* redux-form
* React Boostrap Table
* Babel
* ESLint
* Test Runner: Jest
* Test Assertion: Jest
* toastr
