# Student Portal Server Side

## Overview

The Student Portal Server is a backend application that serves as the backbone for the Student Portal system. It handles user authentication, manages student data, and provides API endpoints for communication with the frontend.

## Table of Contents

- [API Documentation](#api-documentation)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
<!-- - [Usage](#usage)
- [Contributing](#contributing)
- [License](#license) -->

## API Documentation

#### I used vercel to online my ServerAPI links are given below ⬇
- Server home : https://assignment-2-level-2-0.vercel.app/
- All Users : https://assignment-2-level-2-0.vercel.app/api/users/
- Single User: https://assignment-2-level-2-0.vercel.app/api/users/9/orders/total-price
- Single User orders : https://assignment-2-level-2-0.vercel.app/api/users/9/orders
- Single User Total Price of order: https://assignment-2-level-2-0.vercel.app/api/users/9/orders/total-price


## Features


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
   git clone 

2. Install dependencies:
    ```bash
    cd student-portal-server
    npm install

3. Configure environment variables:

    Create a .env file in the root directory and define the following variables:
    ```
    USER_NAME=username_of_mongodb_user
    PASSWORD=password_of_mongodb_user

4. Start the server:
    ```
    npm start


