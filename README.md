# mohnet_hw1_94243012
### Faridodin Hessami

assumption : for the inputs it is manditory for each feature to have a name field in their 'propeties' object

## npm packages in use :

turf package is used to determine if a point is inside of data polygons or not


## endpoint templates :
### print_data
```
/gis/print_data/
```
### reset_data
```
/gis/reset_data/
```
### testpoint
```
/gis/testpoint/:lat/:long
```
### addpolygon
```
/gis/addpolygon
```
and put a data like this in the request's body

```json
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "us"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -131.1328125,
              24.206889622398023
            ],
            [
              -55.8984375,
              24.206889622398023
            ],
            [
              -55.8984375,
              49.83798245308484
            ],
            [
              -131.1328125,
              49.83798245308484
            ],
            [
              -131.1328125,
              24.206889622398023
            ]
          ]
        ]
      }
    }
```


## Heroku Link
[Heroku App](https://hw1-94243012.herokuapp.com/)