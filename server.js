// Get the packages we need

require('dotenv').config();

const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    secrets = require('./config/secrets');


// Create our Express application
const app = express();
    
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Use environment defined port or 3000
const port = process.env.PORT || 3000;

// Allow CORS so that backend and frontend could be put on different servers
const allowCrossDomain = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};
app.use(allowCrossDomain);


// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    return res.status(200).json({hello: "hello"})
})

app.get("/full_secrets", (req, res) => {
    let mode = "DEV"
    if (process.env.NODE_ENV === "production")
        mode = "PRODUCTION"
    return res.status(200).json({mode: mode, my_secrets: secrets})
})

app.get("/crypto", (req,res) => {
    return res.status(200).json("Mike Liu Crypto")
})

app.get("bug_fix", (req, res) => {
    return res.status(200).json()
})

// Start the server
app.listen(port);
console.log('Server running on port ' + port);