var reader = require('./reader.js');
reader.emit(parseInt(process.argv[2]) - 1000, 'c', function(data) {
    console.log(JSON.stringify(data));
});

