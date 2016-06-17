var reader = require('./reader.js');
reader.emit(parseInt(process.argv[2]), 'c', console.log);

