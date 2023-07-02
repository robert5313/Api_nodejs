const express = require('express');

const port = 3000

const app =express();

app.get('/', (req, res) => {
    res.send({message: "Welcome to learning nodejs on day 5"});
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
});