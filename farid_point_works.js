const turf = require('@turf/turf');

module.exports = find_answer_polygons_names_for_point;

function find_answer_polygons_names_for_point(lat, long, names_coords_array) {
    var answer_names = [];

    names_coords_array.forEach(element => {
        // console.log(`element.coords is : ${element.coords}`);

        suspect_name = element.name;

        var turPoly = turf.polygon(element.coords);

        if (turf.booleanPointInPolygon([lat, long], turPoly)) {
            console.log(`a polygon was found for requested point name : ${suspect_name}`);
            answer_names.push(suspect_name);
        }
    });

    if (answer_names.length != 0) {
        console.log(`these answers are found : ${answer_names}`);
    } else {
        console.log(`no answers are found !`);
    }

    return answer_names;
}

// var pt = turf.point([79.453125, 63.54855223203644]);
// var poly2 = turf.polygon([
//     [
//         [56.25, 52.26815737376817],
//         [110.390625, 52.26815737376817],
//         [110.390625, 70.37785394109224],
//         [56.25, 70.37785394109224],
//         [56.25, 52.26815737376817]
//     ]
// ]);

// console.log('the crusial answer is : ' + turf.booleanPointInPolygon(pt, poly2));

//= true