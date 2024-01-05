const express = require('express');
const url = require('url');
const app = express();
const path = require('path');
const routes = require('./routes/user');
const PORT = 1806;

let userIsAuthorised = false;
const pass = "iLoveCoding";

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})


app.use((req, res, next) => {
    const password = req.body.password;
    if (password === pass) {
        userIsAuthorised = true;
    }
    next();
})

app.post('/check', (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(path.join(__dirname + '/public/secret.html'));
        userIsAuthorised = false;
    }
    else {
        res.redirect('/');
    }
})



app.listen(PORT, () => { console.log("Server Started Successfully") });