const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = 'https://api.darksky.net/forecast/e97ed71effa359cf033c75aabda0cfac/' + latitude + "," + longitude;
  request({ url, json: true}, (error, {body}) => {
  if (error) {
    callback(error)
  } else if (body.error) {
    callback(error, "No data to show!")
  } else {
    callback(error, body.currently.temperature + ". The perciptation probability is " + body.currently.precipProbability)
  }
})
}

// request({url: url, json: true}, (error, response) => {
//   if (error) {
//     console.log(error)
//   } else if (response.body.error) {
//     console.log("there is no matched data")
//   } else {
//     console.log(response.body.currently);
//     console.log("The temperature out there is ", response.body.currently.temperature, ". The perciptation probability is ", response.body.currently.precipProbability)
//   }
// })

module.exports = forecast;
