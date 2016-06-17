var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    data = JSON.parse(line);

    var elements = Object.keys(data);
    var names = elements.map(function(e){
      e = e.substr(1);
      return e.charAt(0).toUpperCase() + e.slice(1);
    });

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    for (var i = 0; i < elements.length; i++) {
        var type = elements[i];
        var name = names[i];
        var value = data[type];
        process.stdout.write(name + ": " + value + "\t");
    }
});

