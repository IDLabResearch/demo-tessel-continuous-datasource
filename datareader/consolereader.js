var reader = require('./reader.js');
reader.emit(parseInt(process.argv[2]), 'c', function(data) {
    console.log(JSON.stringify(data));
});

