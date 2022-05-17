// required dependencies
const express = require('express');
// initialize the epxress application
const app = express();
const port =3000
// configure application settings

// mount our middleware

// mount our routes;

app.get('/', (req, res) => {
    res.send('Hello')
});


app.get('/greeting/:name', (req, res) => {
    // console.log(req.params)
    res.send("Hello " + req.params.name)
});

// this tells node to listen for requests is running on: localhost:3000
app.listen(port, () => {
    console.log('This is working')
});