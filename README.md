# Authentication with Refreshing Tokens Implementation

This project demonstrates how to implement JWT authentication with refresh tokens in a Django backend and React frontend.

## Features

- **JWT Authentication:** User login and token generation using JWT.
- **Refresh Tokens:** Implementing token refreshing to keep the user logged in without re-authentication.
- **Protected Routes:** Using a custom `PrivateRoute` component to secure routes that require authentication.

## Tech Stack

### Backend

- ![Django](https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white)  
  Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.

- ![Django Rest Framework](https://img.shields.io/badge/Django%20Rest%20Framework-7A4D3C?style=flat&logo=django&logoColor=white)  
  A powerful toolkit for building Web APIs in Django.

- ![SimpleJWT](https://img.shields.io/badge/SimpleJWT-355E3B?style=flat&logo=python&logoColor=white)  
  A JSON Web Token authentication plugin for Django Rest Framework.

### Frontend

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)  
  A JavaScript library for building user interfaces.

- ![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=react-router&logoColor=white)  
  A library for handling routing in React applications.

- ![JWT-Decode](https://img.shields.io/badge/jwt--decode-00A7E1?style=flat&logo=javascript&logoColor=white)  
  A library to decode JWT tokens in JavaScript.

## Setup and Installation

### Backend (Django)

1. **Clone the repository:**

    ```bash
    git https://github.com/mohit-pythondev/Authentication-Refreshing-Tokens-Implementation.git
    cd your-backend\
    ```

2. **Create a virtual environment:**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Migrate the database:**

    ```bash
    python manage.py migrate
    ```

5. **Start the Django development server:**

    ```bash
    python manage.py runserver
    ```

    The backend will be running on `http://localhost:8000`.

### Frontend (React)

1. **Navigate to the frontend directory:**

    ```bash
    cd <your-frontend-folder>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the React development server:**

    ```bash
    npm start
    ```

    The frontend will be running on `http://localhost:3000`.

## Usage

1. **Login:** On the login page, enter a username and password to get an access token.
2. **Protected Routes:** After login, you will be redirected to the home page, which is protected by a `PrivateRoute`. If the token expires, you will need to refresh it using the refresh token.

## Folder Structure

