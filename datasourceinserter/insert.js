// Takes an interval size (miliseconds),a LDF-server-insertion target url as input parameters
// and the location to a turtle file as input parameters and inserts that time-annotated data into the LDF server.
var request = require('request'),
    fs      = require('fs');

var now = new Date();
var intervalSize = parseInt(process.argv[2]);
var initial = now.getTime();
var final = now.getTime() + intervalSize;
var streamId = 0;

var target = process.argv[3] + "/?initial=" + initial + "&final=" + final + "&streamId=" + streamId;
var body = fs.readFileSync(process.argv[4], 'utf8');

request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     target,
  body:    body
}, function(error, response, body){
  if (error) {
      process.exit(1);
  }
});

