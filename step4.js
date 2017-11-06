var https = require('https');

function getHTML (options, callback) {
  https.get(options, function(response) {

    let responseBodyString = '';
    response.on('data', function (chunk) {
      responseBodyString += chunk;
    callback(responseBodyString);
  });
});
}
function printHTML (html) {
  console.log(html);
}

// function upperCasePrintHTML (html) {
//   console.log(html.toUpperCase())
// }

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// getAndPrintHTML(requestOptions);
getHTML(requestOptions, printHTML);

// getHTML(requestOptions, upperCasePrintHTML);



// function getAndPrintHTML (options) {


//   https.get(options, function(response) {
//     response.setEncoding('utf8');
//     console.log(response);


//     });
// }
