const express = require('express');
const app = express();
//question : what does this line do ?

const PORT = process.env.PORT || 3000;

var say_sth_hi = module.require('./test_module_1');
say_sth_hi();

var reader = module.require('./farid_reader');
var data_array = reader();

var pointWorks = module.require('./farid_point_works');

app.use(express.json());
//for reading json in input body

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/', (req, res) => {
    res.send('new post req recieved !!');
});

app.get('/gis/print_data/', (req, res) => {
    res.send(data_array);
});

app.get('/gis/testpoint/:lat/:long', function(req, res) {
    let lat = req.params.lat;
    let long = req.params.long;

    console.log(`server recieved a point lat : ${lat} long : ${long}`);

    var polygonsArray = [];
    polygonsArray = pointWorks(lat, long, data_array);

    var answerObject = { polygons: polygonsArray };

    res.send(answerObject);
});

app.put('/gis/addpolygon', function(req, res) {
    var jSonSTring = JSON.stringify(req.body);
    var respObj = JSON.parse(jSonSTring);

    var coords = respObj.geometry.coordinates;
    var name = respObj.properties.name;

    add_name_polygons(name, coords, data_array);
    res.send(respObj);
});

app.listen(PORT, () => console.log(`port is listening right now : ${PORT}`));

function add_name_polygons(name, coords, data_array) {
    data_array.push({ name, coords });
}