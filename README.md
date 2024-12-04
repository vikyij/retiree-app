# Retiree Registration System

A web application for retiree registration and management. This application allows users to register, log in, and access a dashboard after authentication. Built with React and using React Router for navigation, the app includes features such as password visibility toggle and form validation.

## Features

- **Landing Page**: Introduction and main navigation for users.
- **Registration Page**: Users can register for the retiree system.
- **Login Page**: Allows users to log into their accounts.
- **Dashboard Page**: Users can access their personal dashboard after logging in.

## Technologies Used

- **Frontend**: React, React Router, Antd.
- **Form Validation**: Yup (for validation schemas)
- **CSS**: Custom styling with plain CSS

## Setup and Installation

Follow the steps below to get the project up and running on your local machine:

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (Node package manager) or **yarn**

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/retiree-app.git
   cd retiree-app
   ```

2. Install dependencies:

   ```
       npm install
   ```

   Or if you are using yarn, run:

   ```
       yarn install
   ```

3. To start the development server, run:

   ```
       npm start
   ```

   Or if you are using yarn, run:

   ```
       yarn start
   ```

4. The application will be available in your browser at:
   ```
       http://localhost:3000
   ```

### Folder Structure

Here is a general overview of the folder structure:

```
/referee-app
│
├── /public                # Static files like index.html
├── /src                   # React source files
│   ├── /components        # Reusable components (Navbar, Footer, Card, etc.)
│   ├── /pages             # Individual pages (LandingPage, Login, Register, Dashboard)
│   ├── /styles            # Custom CSS files
│   ├── App.js             # Main application entry point
│   └── index.js           # Renders the app into the DOM
├── .gitignore             # Files and directories to ignore in version control
├── package.json           # Project dependencies and scripts
└── README.md              # This file

```

### Notes

- Validation: The forms are validated using the Yup validation schema for user input (both in registration and login).
- Authentication: User authentication is simulated with localStorage for now. In a production environment, it would connect to an API for login and registration.
- Routing: Uses react-router-dom for page navigation.

### Acknowledgments

- Thanks to React(https://react.dev/) for providing the foundation of this project.
- Thanks to Yup(https://github.com/jquense/yup?tab=readme-ov-file) for form validation.
