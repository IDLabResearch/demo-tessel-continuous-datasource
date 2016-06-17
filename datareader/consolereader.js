//console.log(process.argv[3]);
var modules = process.argv[3].split(',');

//console.log(modules);

for (var i = 0; i < modules.length; i ++) {

  switch(modules[i]) {
    case 'climate':
      var reader = require('./reader.js');
        reader.emit(parseInt(process.argv[2]), 'c', function (data) {
          console.log(JSON.stringify(data));
      });
      break;
    case 'ambient':
      var reader = require('./reader_ambient.js');
      reader.emit(parseInt(process.argv[2]), function (data) {
        console.log(JSON.stringify(data));
      });

    case 'rfid':
      var reader = require('./reader_rfid.js');
      reader.emit(parseInt(process.argv[2]), function (data) {
        console.log(JSON.stringify(data));
      });
  }
}