const http = require('http');

const express = require('express');

const app = express();

// use method will hook the middlware to express js 
//which is responsible to listen to the server requests
app.use((req, res, next) => { //first middlware
    console.log("I'm in the first middleware");
    next(); // by executing this method express will explicitly look for next middleware in the code
    // else it would not do anything 
    // we can send the response back instead 
    // next method should be invoked only before sending the response back
});

app.use((req, res, next) => { //second middleware
    console.log("I'm in the second middleware");
    // send
    // // res.write('<h1>Hi from 1st express</h1>');
    // res.write('<h1>Hello from express</h1>');
    res.send('<h2>end</h2>');
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);