var tessel = require('tessel');
var rfidlib = require('rfid-pn532');
var rfid = rfidlib.use(tessel.port['A']);

function emit(timeout, cb) {
    rfid.on('ready', function() {
        var latestUID;

        rfid.on('data', function(card) {
            latestUID = card.uid.toString('hex');
        });

        setInterval(function(){
            if (latestUID) {
                cb({
                    module: 'rfid',
                    device: tessel.deviceId(),
                    uid: latestUID
                });
            }
        }, timeout);
    });
}

module.exports = {
  emit: emit
};

