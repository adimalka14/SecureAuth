# Authentication and User Management Project

## Description

This project is a user authentication and management system built using **Node.js** and **Express.js**. It includes features like login, registration, role-based access control (RBAC), and rate limiting for secure API usage. The authentication is handled using **Passport.js**, and session management is performed with **express-session**.

---

## Features

- **User Authentication**: 
  - Secure login and registration using `Passport.js` with the `LocalStrategy`.
  - Users can log in, log out, and access protected routes.
  
- **Role-Based Access Control (RBAC)**: 
  - Different roles such as admin and regular users.
  - Admin users have access to specific routes for managing users and data.
  
- **Rate Limiting**: 
  - Protects against brute-force attacks by limiting requests to authentication routes using `express-rate-limit`.

- **Session Management**: 
  - Sessions are stored securely using `express-session`.
  
- **Security**: 
  - Uses `Helmet.js` to secure the app by setting various HTTP headers.
  - Input data validation and sanitization are handled to prevent injection attacks.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for building RESTful APIs.
- **Passport.js**: Authentication middleware for managing user login.
- **express-session**: For managing sessions securely.
- **express-rate-limit**: Middleware to limit request rates and prevent abuse.
- **Helmet.js**: Middleware for securing HTTP headers.
- **bcrypt**: For password hashing and encryption.
- **Mongoose**: MongoDB object modeling for Node.js.
- **dotenv**: For environment variable management.

---

## Project Structure

```plaintext
/src
│
├── controllers
│   ├── authController.ts       # Handles authentication logic (login, logout, register)
│   ├── adminController.ts      # Manages admin functionalities
│   └── userController.ts       # Handles user CRUD operations
│
├── middlewares
│   ├── passport.ts             # Passport.js configuration for local strategy
│   ├── rateLimit.ts            # Middleware for rate limiting
│   └── authorization.ts        # Middleware for role-based access control
│
├── routes
│   ├── auth.ts                 # Routes for login, logout, register
│   ├── user.ts                 # Routes for user management
│   └── admin.ts                # Routes for admin management
│
├── models
│   ├── user.ts                 # Mongoose schema for users
├── config
│   └── rateLimit.ts            # Rate limit configuration
│
├── utils
│   └── helpers.ts              # Utility functions (password hashing, etc.)
│
└── server.ts                   # Entry point for the application

```



## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/adimalka14/auth-system.git
   cd auth-system


2. Install dependencies:

   ```bash
   npm install
   
3. Create .env file in the root directory and set the following variables:
    
    ```bash
    SESSION_SECRET=your_secret_key
    MONGO_URI=your_mongodb_uri

4. Run the application:

    ```bash
    npm start

The app will run on http://localhost:3000.
```
```


## Usage

1. **Register a new user**:
    - Endpoint: `POST /auth/register`
    - Body:
    ```json
    {
    "email": "john.doe@example.com",
    "password": "password123"
    }

    ```

2. **Login a user**:
    - Endpoint: `POST /auth/login`
    - Body:
    ```json
    {
    "email": "john.doe@example.com",
    "password": "password123"
    }

    ```

3. **Access protected routes (e.g., admin panel)**:
    - Must be logged in and have the required role (admin).`

    ```

## Future Improvements

- **JWT Authentication: Replace session-based authentication with JWT for stateless authentication.
- **Database Integration: Enhance user and session management with advanced querying.
- **Improved Validation: Add more comprehensive input validation.
