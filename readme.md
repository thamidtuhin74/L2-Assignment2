# Assignment-2 Server Side

## Overview

Assignment-2 Server is a backend application , Backed always serves as the backbone for a system. It handles user authentication, manages User data, Perform GET, POST, PUT, Delete methods, Calculated Total Cost of Order and provides API endpoints for communication with the frontend.

## Table of Contents

- [API EndPoints](#api-endpoints)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
<!-- - [Usage](#usage)
- [Contributing](#contributing)
- [License](#license) -->

## API EndPoints

#### I used vercel to online my ServerAPI endpoints are given below ⬇
- Server home : https://assignment-2-level-2-0.vercel.app/
- All Users : https://assignment-2-level-2-0.vercel.app/api/users/
- Single User: https://assignment-2-level-2-0.vercel.app/api/users/9/orders/total-price
- Single User orders : https://assignment-2-level-2-0.vercel.app/api/users/9/orders
- Single User Total Price of order: https://assignment-2-level-2-0.vercel.app/api/users/9/orders/total-price


## Features

- Perform GET, POST, PUT, Delete methods, 
- Calculated Total Cost
- RESTful API for communication with the frontend
- Admin Can ADD/ EDIT/ Remove a User

## Technologies

- Node.js 
- MongoDB 
- typescript
- mongooes
- expressJS
- vercel

## Getting Started

### Prerequisites

Ensure you have the following software installed on your machine:

- Node.js 
- MongoDB 
- expressJS

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thamidtuhin74/L2-Assignment2.git

2. Install dependencies:
    ```bash
    cd L2-Assignment2
    npm install

3. Configure environment variables:

    Create a .env file in the root directory and define the following variables:
    ```
    NODE_ENV=
    PORT=
    DATABASE_URL=
    BCRYPT_SALT_ROUNDS=

4. Start the server:
    ```
    npm run start


