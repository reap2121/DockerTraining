var express = require('express');
var app = express();
var cors = require('cors');
var fs = require('fs');

const PORT = 8091;
app.use(cors());

app.get('/vegetables', (req, res) => {
    fs.readFile(__dirname + '/../resources/vegetables.json', 'utf8', (err, data) => {
        if(err){
            console.log(err);
        }

        console.log('Sending vegetables');
        res.end(data);
    })
});

let server = app.listen(PORT, () => {
    console.log(`Listening on port: ${server.address().port}`);
});