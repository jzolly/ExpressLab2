const express = require('express');
const app = express ()
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <p>99 Bottles of butterbeer on the wall...</p>
        <a href="http://localhost:3000/98">Take one down, pass it around</a>
    `)
});

app.get('/:number_of_bottles', (req, res) => {
    const newNum = req.params.number_of_bottles - 1
    if (req.params.number_of_bottles == 0){
        res.send(`
            <a href="http://localhost:3000">Start Over?</a>
        `)
    } else {
        res.send(`
    <p>${newNum} bottle of butterbeer on the wall</p>
    <a href="http://localhost:3000/${newNum}">Take one down, pass it around</a>
    
    `)
    }
    
})

app.listen(port, () => {
    console.log('did it')
})