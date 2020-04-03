let an_array = readData();
console.log(an_array);
//examplary main code

module.exports = readData;

function readData() {
    let data_from_file = require('./data.json');
    //data_from_file is an object

    let features_1st_layer = data_from_file.features;

    console.log(features_1st_layer);

    var array_of_names_coords = [];

    features_1st_layer.forEach(feature => {
        console.log('name : ' + feature.properties.name);
        console.log('coordinates : ' + feature.geometry.coordinates);

        let name = feature.properties.name;
        let coords = feature.geometry.coordinates;

        array_of_names_coords.push({ name, coords });
    });

    console.log('real thing : ');
    console.log(array_of_names_coords);

    return array_of_names_coords;
}