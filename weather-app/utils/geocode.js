const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZmVsaXhsenkiLCJhIjoiY2s3NGlwNTM4MG1oZjNlcXFpNjFneHhncyJ9.xkE2luGsAgoaLbWLCT9fGA';
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback(error, "Error encountered sending request!")
    } else if (body.features.length === 0) {
      callback("there is no record found!", body)
    } else {
      callback(undefined, {
        lat: body.features[0].center[1],
        lng: body.features[0].center[0],
        location: body.features[0].place_name
      })
      // console.log(response.body.features[0].place_name)
    }
  })
}

module.exports = geocode