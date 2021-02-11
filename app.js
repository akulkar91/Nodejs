const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();

// const bp = bodyParser.urlencoded({extended:false});
// console.log(bp);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
// use method will hook the middlware to express js 
//which is responsible to listen to the server requests
// app.use((req, res, next) => { //first middlware
//     console.log("I'm in the first middleware");
    // next(); // by executing this method express will explicitly look for next middleware in the code
    // else it would not do anything 
    // we can send the response back instead 
    // next method should be invoked only before sending the response back
// });
app.use('/admin',adminRoutes); //filtering paths

app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});
// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);