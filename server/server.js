const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calc = require('./modules/calculate');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded( {extended: true}));

//routes

app.post('/calculate', function(req,res){
    console.log('body: ' , req.body);
    let result = calc.calc(req.body);
    let history = calc.history;
    let sentBackResult = {
        result: result,
        history: history
    }
    res.send(sentBackResult);
    // console.log('input: ');

});


















const port = 5000;
app.listen(port, ()=>{
    console.log('server is up on port: ', port);
});