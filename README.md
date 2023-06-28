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

Handling GET Requests in Node.js
Making a GET Request to get the data from another site is relatively very simple in Node.js
Get request in the node, we need to first have the request module installed
   npm install request


##Types Of Modules in Node
    Built In Modules: These are modules included in Node by default, so you can use them without installation. You just need to import them and get started.
    External Modules: These are modules created by other developers which are not included by default. So you need to install them first before using them.


The OS Module

The OS Module (as its name implies) provides you methods/functions with which you can get information about your Operating System.

    const os = require('os');


you can check this link for more update on whats nodejs 
  https://www.freecodecamp.org/news/get-started-with-nodejs/

Node.js as a File Server

The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:

Common use for the File System module:

    Read files
    Create files
    Update files
    Delete files
    Rename files

Read Files

The fs.readFile() method is used to read files on your computer.

Assume we have the following HTML file (located in the same folder as Node.js)
