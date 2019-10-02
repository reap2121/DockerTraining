var express = require('express');
var cors = require('cors');
var app = express();

const PORT = 8088;

app.use(cors());

app.get('/fruits', (req, res) => {
    console.log('Sending fruits');
    res.end(JSON.stringify([ "apple", "banana", "pear" ]));
});

let server = app.listen(PORT, () => {
    console.log(`Listening on port: ${server.address().port}`);
});
