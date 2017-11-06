function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  http.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    let responseBodyString = '';

    response.on('data', function (data) {
      console.log('\n');
      responseBodyString += data;
      console.log('Chunk Received. Length:', data.length);
    });
  });
}