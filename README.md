Node.js Tutorial for Beginners

Learn Step by Step in 7 Days Node.js
Dedicate 2 hours daily javascript framework study
# Api_nodejs
visit Nodejs documentation
### https://nodejs.dev/en/
Introduction to Node.js
Node.js is free, open source, server side javascript framework
Node.js runs on various platforms (Windows, Linux, Unix, Mac)
Node.js is a platform that allows you to run JavaScript code on the server-side, which means you can create web servers and build backend applications using JavaScript.

What Can Node.js Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database

const express = require('express');

    In the first statement itself, we are using the “require” keyword to include the express module. The “express” module is an optimized JavaScript library for Node.js development. This is one of the most commonly used Node.js modules.

    The basic functionality of the require function is that it reads a JavaScript file, executes the file, and then proceeds to return the exports object.
    We are creating a server application which is based on a simple function. This function is called whenever a request is made to our server application
    We are saying to send a response with a header type of ‘200.’ This number is the normal response which is sent in an http header when a successful response is sent to the client
    We are sending the string 'Hello World' which is in the index.js file code.
    Listen function to make our server application listen to client requests on port no 8080.