// Takes an interval size (miliseconds),a LDF-server-insertion target url as input parameters
// and the location to a turtle file as input parameters and inserts that time-annotated data into the LDF server.
// Data will be inserted as static data when the interval size is 0.
var request = require('request'),
    fs      = require('fs');

var now = new Date();
var intervalSize = parseInt(process.argv[2]);
var initial = now.getTime();
var final = now.getTime() + intervalSize;
var streamId = 0;

// Hack for also inserting static data.
if (intervalSize <= 0) {
    initial=-1;
    final=-1;
    streamId="STATIC";
}

var target = process.argv[3] + "/?initial=" + initial + "&final=" + final + "&streamId=" + streamId;
var body = fs.readFileSync(process.argv[4], 'utf8');

request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     target,
  body:    body
}, function(error, response, body){
  if (error) {
      console.log(error);
      process.exit(1);
  } else {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write("Valid until: " + new Date(final).toISOString());
  }
});

