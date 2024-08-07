# Frontend Test Project

This project is a full-stack application that I developed as a frontend test. It includes both backend and frontend implementations. The application allows users to manage products, including creating, updating, and deleting products.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Setup](#setup)
-   [Usage](#usage)
-   [API Endpoints](#api-endpoints)
-   [Frontend Application](#frontend-application)
-   [Links](#links)
-   [Contributing](#contributing)

## Features

-   User authentication (register, login, logout)
-   Create, read, update, and delete products
-   Upload product images to Cloudinary
-   Search and filter products
-   Responsive design

## Technologies Used

### Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   bcryptjs (for password hashing)
-   jsonwebtoken (for authentication)
-   Render (for backend hosting)


### Frontend

-   Vue.js
-   Vuex (for state management)
-   Vue Router (for navigation)
-   Tailwind CSS (for styling)
-   Axios (for API requests)
-   Vue3 Toastify (for notifications)
-   Cloudinary (for image uploads)
-   Vercel (for frontend hosting)

## Setup

### Backend

1. Clone the repository:

    ```bash
    git clone https://github.com/Dannydramo/learnlyapp-test-assessment
    cd your-repo-name/backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add the following variables:

    ```env
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
   
    ```

4. Start the server:
    ```bash
    npm start
    ```

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add the following variables:

    ```env
    VITE_API_URL=http://localhost:your_backend_port
    VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    VITE_CLOUDINARY_API_KEY=your_cloudinary_api_key
    VITE_UPLOAD_PRESET=your_upload_preset
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Register a new user or log in with an existing account.
2. Navigate to the products page to view all products.
3. Use the search bar to filter products by name.
4. Click "Add Product" to create a new product.
5. Click on a product to view details or edit it.
6. Delete a product if necessary.

## API Endpoints

### User Routes

-   `POST /api/v1/auth/register` - Register a new user
-   `POST /api/v1/auth/login` - Log in an existing user

### Product Routes

-   `GET /api/v1/product` - Get all products
-   `POST /api/v1/product/new` - Create a new product
-   `PUT /api/v1/product/:id` - Update an existing product
-   `DELETE /api/v1/product/:id` - Delete a product

## Frontend Application

The frontend application is built with Vue.js and styled using Tailwind CSS. It communicates with the backend API to perform CRUD operations on products.

## Links

-   [Live Demo](https://alumandu-daniel-learnlyapp-test.vercel.app/)


