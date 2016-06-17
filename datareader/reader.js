var tessel = require('tessel');
var climatelib = require('climate-si7020');
var climate = climatelib.use(tessel.port['A']);

function emit(timeout, temperatureEncoding, cb) {
    climate.on('ready', function() {
        setImmediate(function loop() {
            climate.readTemperature(temperatureEncoding, function (errTemp, temp) {
                climate.readHumidity(function (errHumid, humid) {
                    cb({
                        module: 'climate',
                        device: tessel.deviceId(),
                        temperature: {
                            value: temp,
                            error: errTemp
                        },
                        humidity: {
                            value: humid,
                            error: errHumid
                        }
                    });
                    setTimeout(loop, timeout);
                });
            });
        });
    });
}

module.exports = {
  emit: emit
};

