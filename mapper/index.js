/**
 * Created by Pieter Heyvaert, Data Science Lab (Ghent University - iMinds) on 6/10/16.
 */

var fs = require('fs');
var exec = require('child_process').exec;

process.stdin.pipe(require('split')()).on('data', processLine);

function processLine (line) {
  if (line) {
    var data = JSON.parse(line);
    var file = '';

    switch (data.module) {
      case 'climate':
        file += 'climate.json';
        break;
    }

    fs.writeFile(file, line, function (err) {
      if (err) {
        return console.log(err);
      }

      generateRDF(data.module, data);
    });
  }
}

function generateRDF(module, data) {
  var dir = __dirname; //'/home/pieter/Developer/demo-thermometer-continuous-datasource/mapper/';
  var outputFile = dir + '/triples.ttl';
  var format = 'turtle';
  var mappingFile = dir + '/tessel.rml.ttl';
  var logFile = dir + '/tessel.rml.log';
  var rmwd = dir;

  //exec('cd ' + rmwd + '; java -jar RML-Mapper.jar -m ' + mappingFile + ' -f ' + format + ' -o ' + outputFile + ' > ' + logFile, function (error, stdout, stderr) {
  exec('cd ' + rmwd + '; java -jar RML-Mapper.jar -m ' + mappingFile + ' -f ' + format + ' -o ' + outputFile + ' > ' + logFile + '; sed -i \'/^s*$/d\' ' + outputFile, function (error, stdout, stderr) {
    //var readStream = fs.createReadStream(outputFile);

    //readStream.pipe(process.stdout);
    console.log('done');
  });
}

function fetchMapping(module) {
  

  return triples;
}