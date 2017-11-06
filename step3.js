function getAndPrintHTML (options) {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    console.log(response);

  let responseBodyString = '';
    response.on('data', function (chunk) {
      responseBodyString += chunk;
      console.log(chunk, '\n');
    });
  });
}
getAndPrintHTML();