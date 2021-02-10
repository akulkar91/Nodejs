const fs = require('fs');

const requestHandler = (request,response) => {
    const url = request.url;
    const method = request.method;
    // process.exit(); // hard exit to stopp listening to the requests from the server

    if( url === '/'){
        response.write('<html><head><title>Enter Message</title></head><body>');
        response.write('<form action="/message" method="POST">');
        response.write('<input type="text" name="message">');
        response.write('<button type="submit">Send</button>');
        response.write('</form></body></html>');
        response.end();
        return;
    }
    if( url === '/message' && method === "POST") {
        const body = [];
        //ON method  is available in the request which allows us to register an event listener
        request.on('data',(chunk) => { //allows to listen certain events in this case its data
            console.log(chunk);
            body.push(chunk);
        });
        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[0];
            fs.writeFileSync('message.txt', message);
        });
        response.setHeader('Location','/'); // with Location attribute we now will be able to set the route
        response.statusCode = 302; // status code for redirect
        response.end(); // terminate header mutations
        return;
    }
    response.write('<html><head><title></title></head><body><h1>Hi from back end node js server</h1></body></html>');
    response.end();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some text'
// }

exports.handler = requestHandler,
exports.someText = 'Some text'
