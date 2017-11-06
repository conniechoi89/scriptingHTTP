var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverseStringPrintHTML (html) {
  var splitHTML = html.split("");
  var reverseArray = splitHTML.reverse();
  var joinArray = reverseArray.join("");
  console.log(joinArray);
}

getHTML(requestOptions, reverseStringPrintHTML);