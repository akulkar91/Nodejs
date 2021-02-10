const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h2>User list app</h2>');
        res.write('<form action="/create-user" method="POST"> ');
        res.write('<input type="text" name="username">');
        res.write('<button type="submit"> Create user </button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        return;
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h2>User list </h2>');
        res.write('<ul>');
        res.write('<li> User 1</li> ');
        res.write('<li> User 2</li> ');
        res.write('<li> User 3</li> ');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        return;
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.setHeader('Location','/users');
        res.statusCode = 302;
        res.end();
        return;
    }
    res.write('<h2>User list app</h2>');
    res.end();
});

server.listen(3001);
