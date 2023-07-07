const express = require('express');
const app = express();
const port = 3000;

app.route('/Node').get(function(req, res)
{
    res.json({message: "Tutorial for Nodejs"});
});
app.route('/angular').get(function(req, res)
{
    res.json({message: "Tutorial for Angularjs"});
});
app.get('/', function(req, res) 
{
    res.json({message: "Welcome to the home page"});

});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);