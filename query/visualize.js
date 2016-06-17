var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var elements = ["?temperature", "?humidity"];
var names = ["Temperature", "Humidity"];

rl.on('line', function(line){
    data = JSON.parse(line);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    for (var i = 0; i < elements.length; i++) {
        var type = elements[i];
        var name = names[i];
        var value = data[type];
        process.stdout.write(name + ": " + value + "\t");
    }
});

