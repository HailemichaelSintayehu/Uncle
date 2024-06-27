# Backend Codebase
## Prerequisites
- Nodejs
- npm
- Postgres Database

## Installation
- Clone this repo onto your machine
- Navigate into the project directory
- Install dependencies using npm or yarn package manager (npm install/ yarn)
- Ensure database service is running and setup the database for this project
- Set up the environment variables file and populate with your database config details (.env file)
- Run database migration 
- Start the server using the folloeing command: npm start



The server will run on `http://localhost:3001` by default. You can change the port by modifying the `PORT` variable in the `.env` file.

## API Endpoints

The following endpoints are available:

# Auth Endpoints
- **POST /api/login**: Login user to the app.
- **POST /api/register**: Register new user

# Appliance Endpoints
- **GET /api/appliance/:id **: fetch appliance by appliance id
- **GET /api/appliance/search **: search appliances based on provided parameters

# subscription endpoints
-Please unsure you update your migrations before trying this endpoints for the first time

- **GET /api/subscriptions**: get subscriptions of a logged in user
- **POST /api/subscriptions**: create subscriptions for the logged in user

<!-- Added the checkout endpoint -->
- **POST /api/stripe/checkout**: checkout user cart by invoking stripe payment agent session

<!-- Added the enviroment file -->
- changed the configuration strategy to use environemt variables



## Testing

To run tests, use the following command:



