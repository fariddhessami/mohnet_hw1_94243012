const express = require('express');
const app = express();
//question : what does this line do ?

const PORT = 3000;

var say_sth_hi = module.require('./test_module_1');
say_sth_hi();

var reader = module.require('./farid_reader');
var array_major = reader();
console.log('ull see this after i read');

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/', (req, res) => {
    res.send('new post req recieved !!');
});

app.get('/gis/testpoint/', (req, res) => {
    res.send('alo');
});

app.get('/gis/testpoint/:num', (req, res) => {
    res.send(req.params.num);
});

app.get('/gis/testpoint/:lat/:long', function(req, res) {
    res.send('lat nad long' + req.params.lat + ' ' + req.params.long);
    res.send(req.params);
});

app.listen(PORT, () => console.log(`port is listening right now : ${PORT}`));