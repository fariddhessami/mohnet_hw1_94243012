var inside = require('point-in-polygon');
var polygon = [
    [1, 1],
    [1, 2],
    [2, 2],
    [2, 1]
];

console.dir([
    inside([1.5, 1.5], polygon),
    inside([4.9, 1.2], polygon),
    inside([1.8, 1.1], polygon)
]);

// module.exports = is_point_inside_polygon;

// //          example : (from the npm page)
// //
// var polygon = [
//     [1, 1],
//     [1, 2],
//     [2, 2],
//     [2, 1]
// ];

console.log([
    is_point_inside_polygon([1.5, 1.5], polygon),
    is_point_inside_polygon([4.9, 1.2], polygon),
    is_point_inside_polygon([1.8, 1.1], polygon)
]);

function is_point_inside_polygon(lat, long, polygon) {
    var answer = false;
    answer = inside([lat, long], polygon);
    return anwer;
}