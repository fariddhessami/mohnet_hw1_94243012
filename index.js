const express = require('express');
const app = express();
//question : what does this line do ?

const PORT = 3000;

var say_sth_hi = module.require('./test_module_1');
say_sth_hi();

var reader = module.require('./farid_reader');
var data_array = reader();

var pointWorks = module.require('./farid_point_works');

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/', (req, res) => {
    res.send('new post req recieved !!');
});

app.get('/gis/print_data/', (req, res) => {
    res.send(data_array);
});

app.get('/gis/testpoint/', (req, res) => {
    res.send('alo');
});

app.get('/gis/testpoint/:num', (req, res) => {
    res.send(req.params.num);
});

app.get('/gis/testpoint/:lat/:long', function(req, res) {
    let lat = req.params.lat;
    let long = req.params.long;

    res.send('lat nad long' + lat + ' ' + long);
    console.log(`server recieved a point lat : ${lat} long : ${long}`);

    pointWorks(lat, long, data_array);
});

app.listen(PORT, () => console.log(`port is listening right now : ${PORT}`));