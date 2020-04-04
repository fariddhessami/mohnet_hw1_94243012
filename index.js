const express = require('express');
const app = express();
//question : what does this line do ?

const PORT = process.env.PORT || 3000;



var reader = module.require('./farid_reader');
var data_array = reader();

var pointWorks = module.require('./farid_point_works');

app.use(express.json());
//for reading json in a request's input body

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/gis/print_data/', (req, res) => {
    res.send(data_array);
    console.log('server recieved a print_data request');
});

app.get('/gis/reset_data/', (req, res) => {
    data_array = [];
    console.log('server recieved a reset_data request');
});

app.get('/gis/testpoint/:lat/:long', function(req, res) {
    let lat = req.params.lat;
    let long = req.params.long;

    console.log(`server recieved a point lat : ${lat} long : ${long}`);

    var polygonsArray = [];
    polygonsArray = pointWorks(lat, long, data_array);

    var answerObject = { 'polygons': polygonsArray };

    if (polygonsArray.length == 0) {
        res.send("no polygons found");
    } else {
        res.send(answerObject);
    }
});

app.put('/gis/addpolygon', function(req, res) {
    var jSonSTring = JSON.stringify(req.body);
    var respObj = JSON.parse(jSonSTring);

    var coords = respObj.geometry.coordinates;
    var name = respObj.properties.name;

    add_name_polygons_toData(name, coords, data_array);
    res.send(`your polygon named : ${name} has been added !`);
});

app.all('*', function(req, res) {
    res.statusCode = 400;
    res.send("Bad request 400")
    console.log("server recieved a bad request");
});

app.listen(PORT, () => console.log(`port: ${PORT} is listening right now `));

function add_name_polygons_toData(name, coords, data_array) {
    data_array.push({ name, coords });
    console.log(`polygon named : ${name} has been added by a user's request !`);

}