const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.use(express.static('server/public'));
app.use(bodyParser.urlencoded( {extended: true}));

//routes




















const port = 5000;
app.listen(port, ()=>{
    console.log('server is up on port: ', port);
});