# Password Protected Node.js Web App

This Node.js Express web application implements a password-protected page. Users need to enter the correct password to access certain routes.

## Installation

1. Clone the repository:

      ```bash
      git clone https://github.com/Firdous19/SECRET-APP.git
      ```

2. Navigate to the project directory:

      ```bash
      cd SECRET-APP
      ```

3. Install dependencies:

      ```bash
      npm install
      ```

## Usage

1. Start the application:

      ```bash
      npm start
      ```

      The app will be accessible at `http://localhost:1806` by default.

2. Open your web browser and navigate to `http://localhost:1806` to view the home page.

3. To access the password-protected page, enter the correct password when prompted.

## Configuration

- The application uses a simple password mechanism for demonstration purposes. In a production environment, it's recommended to implement a more secure authentication method.

## Routes

- **Home Route ("/")**: Renders the initial landing page.

- **Protected Route ("/check")**: Accessible after entering the correct password.

## Password

The default password is "iLoveCoding". You can customize this password in the code as needed.

## Dependencies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

## Security Considerations

- **Secure Password**: In a production environment, consider using a more secure authentication method, such as OAuth, Passport.js, or JWT.

- **HTTPS**: If deploying the app in a production environment, use HTTPS to encrypt communication between the client and server.

## Author

- [SK Firdous Rahaman]
- [firdousrahaman42@gmail.com]
