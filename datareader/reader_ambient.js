var tessel = require('tessel');
var ambientlib = require('ambient-attx4');
var ambient = ambientlib.use(tessel.port['B']);

function emit(timeout, cb) {
    // ambient.on('ready', function() {
    //     setImmediate(function loop() {
    //         ambient.getLightLevel(function (errLight, light) {
    //             ambient.getSoundLevel(function (errSound, sound) {
    //                 cb({
    //                     module: 'ambient',
    //                     device: tessel.deviceId(),
    //                     light: {
    //                         value: light,
    //                         error: errLight
    //                     },
    //                     sound: {
    //                         value: sound,
    //                         error: errSound
    //                     }
    //                 });
    //                 setTimeout(loop, timeout);
    //             });
    //         });
    //     });
    // });
}

module.exports = {
  emit: emit
};

