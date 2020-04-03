const turf = require('@turf/turf');

var pt = turf.point([-77, 44]);
var poly = turf.polygon([
    [
        [-81, 41],
        [-81, 47],
        [-72, 47],
        [-72, 41],
        [-81, 41]
    ]
]);

turf.booleanPointInPolygon(pt, poly);
//= true

console.log(turf.booleanPointInPolygon(pt, poly));

function find_answer_polygons_names_for_point(lat, long, names_coords_array) {
    var suspect_name;
}