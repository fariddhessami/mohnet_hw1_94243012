const turf = require('@turf/turf');

module.exports = find_answer_polygons_names_for_point;

function find_answer_polygons_names_for_point(lat, long, names_coords_array) {
    var answer_names = [];

    names_coords_array.forEach(element => {
        console.log(`element.coords is : ${element.coords}`);

        var turPoly = turf.polygon(element.coords);

        if (turf.booleanPointInPolygon([lat, long], turPoly)) console.log('jesus');
    });
}

var pt = turf.point([79.453125, 63.54855223203644]);
var poly2 = turf.polygon([
    [
        [56.25, 52.26815737376817],
        [110.390625, 52.26815737376817],
        [110.390625, 70.37785394109224],
        [56.25, 70.37785394109224],
        [56.25, 52.26815737376817]
    ]
]);

console.log('the crusial answer is : ' + turf.booleanPointInPolygon(pt, poly2));

//= true