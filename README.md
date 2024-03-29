# Which.com Test Case

### Goal
We would like you to create a client-side web application to help a child understand multiplication. Your application will display a grid of numbers. When a child selects a number, the multiples of that chosen number should be highlighted.

### Functional requirements
The application must display numbers from 1 to 144.
When a number is clicked, all numbers which are a multiple of the chosen number must be highlighted.
When a subsequent number is clicked, all numbers which are a multiple of the new number must be highlighted. Any numbers which are not multiples of the new number should no longer be highlighted.
### Visual requirements
Each number must be within a large clickable box.
Each number must be horizontally and vertically centered within their clickable box.
The boxes must be laid out evenly within a grid.
On mobile and small screen devices, one number must be displayed in each grid row.
On tablet and middle sized devices, two numbers must be displayed in each grid row.
On desktop and large screen devices, three numbers must be displayed in each grid row.
The grid should have a maximum width so that the clickable boxes do not get too large.
The grid should be horizontally centered on the screen.

### The Process:

The Project is build from scratch using the create-react-app template and kept simple consisting of two components App which is activing as the main render container and table grid consisting of the main table and grid logic the test cases and style sheets are kept in the same folder for simplicity. with a plenty of room for improvement.

The Grid is developed in the column wise approach in order to change the number of column the user can simply update the css grid with currently is set to 3 column per row as specified in requirement docs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using typescript

To get started you'll need to make sure you have the following software tools installed:

- Git
- Node.js (version 12 or higher is required)
- npm (this should be installed along with Node.js)

## Installation and setup

Install all of the project dependencies using npm:

`npm install`

Once installed you can run the Webpack development server:

`npm start`

Now open `http://localhost:3000` in your browser and you should see a Which.com Test Case

To stop the server when no longer needed, you can press `ctrl + c` in the terminal.

And to run your tests use the following command:

`npm test`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
