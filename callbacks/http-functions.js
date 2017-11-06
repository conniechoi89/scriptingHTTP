var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function(response) {

    let responseBodyString = '';
    response.on('data', function (chunk) {
      responseBodyString += chunk;
    callback(responseBodyString);
  });
});
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

