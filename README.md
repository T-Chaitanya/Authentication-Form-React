# React Auth App

A simple React application demonstrating authentication flows (login, registration) using the DummyJSON API, form submission, and displaying user information. Includes CSS styling and Git integration.

## Features

* **Login** via `https://dummyjson.com/auth/login`
* **Registration** via `https://dummyjson.com/users/add` (simulated)
* **Protected Route** for profile access
* **CSS Styling** (global and CSS modules)


## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/react-auth-app.git
   cd react-auth-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173/login` (or `/register`).

## Project Structure

```
react-auth-app/
├── public/
├── src/
│   ├── components/
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Profile.jsx
│   ├── services/
│   │   └── auth.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## Available Scripts

In the project directory, you can run:

* `npm run dev`: Starts the development server
* `npm run build`: Builds the app for production
* `npm run preview`: Locally previews the production build

## Authentication Flow

1. **Login**

    * User navigates to `/login`
    * Submits username & password
    * On success, stores `user` object in `localStorage` and redirects to `/profile`

2. **Registration (Simulated)**

    * User navigates to `/register`
    * Fills in personal info & credentials
    * Posts to `/users/add` (DummyJSON) and redirects back to `/login`

3. **Protected Route**

    * `/profile` is wrapped by `ProtectedRoute` which checks for `user` in `localStorage`
    * Unauthorized users are redirected to `/login`

4. **Profile Page**

    * Displays user's first name, email, and token
    * Logout button clears `localStorage` and redirects to `/login`

## Contributing

Feel free to open issues or submit pull requests for improvements.

## License

This project is licensed under the MIT License.
