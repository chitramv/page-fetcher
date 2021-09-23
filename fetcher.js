//let content;
const args = process.argv.slice(2);
// make an http request and wait for the response
const request = require('request');
request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the example homepage.
  //content = body;
  // take the data received and write it to a file
const fs = require('fs')

fs.writeFile(args[1], body, (err) => {
  if (err) {
    console.error(err)
    return
  }
  //console.log(body.length);
  console.log(`Downloaded and saved ${body.length} bytes `)
  //file written successfully
})
});


