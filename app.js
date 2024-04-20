console.log('\n\n-: App Started :-');

const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();

app.use(express.static('images'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());                           
   
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


const calendarRoute    = require('./routes/calendarRoute');
app.use(calendarRoute);

app.use('/', (req, res, next)=>{
    console.log('-: Welcome :-');
    res.send('-: Welcome :-');
    next();
});

app.listen(3000);
console.log('-: App Running :-');
