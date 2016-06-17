var modules = process.argv[3].split(',');

interval = Math.floor(parseInt(process.argv[2]) * 0.8);
for (var i = 0; i < modules.length; i ++) {

  switch(modules[i]) {
    case 'climate':
      var reader = require('./reader.js');
        reader.emit(interval, 'c', function (data) {
          console.log(JSON.stringify(data));
      });
      break;
    case 'ambient':
      var reader = require('./reader_ambient.js');
      reader.emit(interval, function (data) {
        console.log(JSON.stringify(data));
      });

    case 'rfid':
      var reader = require('./reader_rfid.js');
      reader.emit(interval, function (data) {
        console.log(JSON.stringify(data));
      });
  }
}
