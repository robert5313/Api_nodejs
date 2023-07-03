Learning nodejs on day 5

Nodejs was created for the goal of building web servers and web applications using Javascript

Asynchronous methods in JavaScript often take a last parameter known as a completion function callback. This callback function is executed when the asynchronous operation is complete. The purpose of using callbacks is to handle the result or perform additional tasks after the asynchronous operation finishes.

The reason why asynchronous methods are preferred over synchronous methods is that they do not block the program execution. In synchronous programming, each instruction is executed one after another in a sequential manner. If a synchronous method takes a long time to complete, it can block the execution of other parts of the program, causing delays and unresponsiveness.

On the other hand, asynchronous methods allow the program to continue its execution while waiting for the completion of the asynchronous operation. Instead of waiting for the operation to finish, the program can move on to execute other tasks or respond to user interactions. When the asynchronous operation is completed, the callback function is invoked to handle the result.

By using asynchronous methods, developers can create more responsive and efficient programs. They are especially useful when dealing with time-consuming tasks like fetching data from a database or making network requests. Asynchronous programming in JavaScript can be achieved using various techniques such as callbacks, promises, and async/await.

Callbacks were one of the earlier solutions for handling asynchronous operations in JavaScript. A callback is a function that is passed as an argument to another function and called when the asynchronous operation is complete. The callback function allows developers to specify the actions to be taken after the operation finishes. However, using callbacks extensively can lead to a phenomenon known as "callback hell," where nested callbacks become difficult to manage and understand.

To address the limitations of callbacks, promises were introduced. Promises provide a more structured way to handle asynchronous operations. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows attaching handlers for successful completion or error handling using the then() method. Promises offer better readability and avoid excessive nesting of callbacks.

Furthermore, the introduction of the async/await syntax in JavaScript simplifies asynchronous programming even further. The async/await keywords provide a more synchronous-like coding style while dealing with asynchronous operations. By marking a function as async, it allows the use of the await keyword inside the function body to pause the execution until a promise is resolved or rejected. This eliminates the need for explicit promise chaining and makes asynchronous code easier to read and write.

In summary, asynchronous methods in JavaScript take a completion function callback as a parameter, and they are preferred over synchronous methods because they do not block program execution. Asynchronous programming allows programs to continue executing other tasks while waiting for the completion of time-consuming operations. Techniques such as callbacks, promises, and async/await are used to handle asynchronous operations in JavaScript efficiently.


### Whats is an event loop?

The Node.js event loop is a mechanism that allows Node.js to perform non-blocking I/O operations despite running on a single thread. It is responsible for handling all I/O operations and executing callbacks.

The event loop continuously checks for new events in the event queue and processes them one by one. When an I/O operation is initiated, it is added to the event queue along with a callback function. Once the operation is completed, the callback function is pushed to the event queue and executed in the next iteration of the event loop.

This mechanism allows Node.js to handle a large number of concurrent connections without blocking the execution of other code. However, it does require careful management of callbacks to avoid callback hell and other issues.

example code
const fs = require('fs');

fs.readFile('/', (err, data) => {
  if (err) throw err;
  console.log(data);
});
In this example, fs.readFile initiates an I/O operation to read a file. Once the operation is complete, the callback function is pushed to the event queue and executed by the event loop.