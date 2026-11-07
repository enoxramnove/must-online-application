# MUST Online Application Portal
Name: SSEMYALO INNOCENT
Reg no. 2025/BSE/167/PS

A lightweight student application portal prototype built with HTML, CSS, vanilla JavaScript, and Node.js/Express. It provides signup and login pages, basic browser-side form validation, and simple API endpoints for login and application submissions.

> **Prototype status:** This project does not use a database. Signup currently performs browser-side validation only; it does not create or save an account. The login API uses a hard-coded demo account, and application submissions are returned in the API response rather than saved.

## Features

- Signup page with required-field and password-match validation.
- Login page with required-field validation.
- Express server serving the page and static files.
- `POST /api/login` demo login endpoint.
- `POST /api/applications` application endpoint.

## Requirements

- Node.js and npm

## Getting started

1. Clone the repository and move into the project directory:

   ```bash
   git clone https://github.com/enoxramnove/must-online-application.git
   cd must-online-application
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Open [http://localhost:3000/signup.html](http://localhost:3000/signup.html) in your browser. The login page is available at [http://localhost:3000/login.html](http://localhost:3000/login.html).

The server listens on port `3000`.

## API

All API routes use the `/api` prefix and accept JSON or URL-encoded form data.

### `POST /api/login`

Request body:

```json
{
  "email": "student@must.ac.ug",
  "password": "12345"
}
```

The demo credentials above return a successful response. Missing credentials return `400`; other credentials return `401`. This endpoint is for demonstration only and is not suitable for real authentication.

### `POST /api/applications`

Example request body:

```json
{
  "name": "Jane Student",
  "email": "jane@example.com",
  "phone": "+256 700 000 000"
}
```

The endpoint responds with a success message and echoes the submitted request data. It does not persist the application.

## Project structure

```text
.
├── controllers/
│   └── applicationController.js
├── routers/
│   ├── appRoute.js
│   └── loginroute.js
├── app.js
├── ham.png
├── index.css
├── login.html
├── server.js
└── signup.html
```

- `server.js` creates the Express server, serves static files, and mounts the API routers.
- `app.js` contains the browser-side form validation logic.
- `routers/` defines the login and application API routes.
- `controllers/applicationController.js` handles application submissions.
- `login.html`, `signup.html`, and `index.css` provide the interface.

## Development notes

- The browser-side login form currently validates that fields are filled in; it does not call `POST /api/login`.
- The signup form currently validates its fields and password confirmation in the browser; it does not call an API.
- The package currently does not define a test suite or a start script. Run the server with `node server.js`.
