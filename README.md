# GlobalsAngular

## Project Description
This project is an Angular application that implements global providers for loading spinner, feedback and error handling. The main purpose of the project is to demonstrate a way to handle these three elements in a centralized and efficient way, so that they can be easily reused across different parts of the application.

The project makes use of the HttpInterceptor feature provided by Angular to intercept all HTTP requests and responses, and handle the loading spinner, feedback and error handling in a consistent manner.

## Features
- Loading spinner: A loading spinner is displayed when an HTTP request is made, and is hidden when the request is completed.
- Feedback: The application uses the messageService provided by the primeng library to display feedback messages to the user.
- Error handling: The application uses a centralized error handling mechanism to handle errors that occur during the execution of an HTTP request.
## Setup
To run this project locally, you will need to have the following software installed:

- Node.js
- Angular CLI
- A code editor of your choice
1. First, clone the repository to your local machine using the following command:

``` git clone https://github.com/Marincor/Global-Providers.git```

2. Navigate to the project directory:

```cd Global-Providers```

3. Install the required dependencies:

```npm install```

4. Run the development server:

```ng serve```

5. Open your browser and navigate to http://localhost:4200/ to see the application running.
Note: You will also need to configure firebase for authentication and add the credentials to environment.ts file.

## Additional information
This project uses Primeng library for message service, you can find more information at https://www.primefaces.org/primeng/
To understand more about how to use HttpInterceptor in Angular, you can check the documentation at https://angular.io/guide/http#intercepting-requests-and-responses

## Conclusion
This project is meant to be a starting point for building an Angular application that implements global providers for loading spinner, feedback and error handling. It can be easily modified and extended to suit the specific needs of your application. With this project, you can handle all the common http requests in a centralized and efficient way.
