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
// Tip Calculator; parseInt
app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params)
    const tipCalc = {
        tip: parseFloat(req.params.total) * (parseFloat(req.params.tipPercentage) / 100),
    }
    res.status(200).send(tipCalc)
});

// Magic 8 Ball
app.get('/magic/:question', (req, res) => {
    const answers = 
    ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const response = {
        question: req.params.question,
        answer:  answers[Math.floor(Math.random() * answers.length)]
    }
    res.status(200).send(`
       <h1>${response.question}? ${response.answer}</h1>
    `)
});

// this tells node to listen for requests is running on: localhost:3000
app.listen(port, () => {
    console.log('This is working')
});