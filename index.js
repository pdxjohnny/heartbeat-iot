var socketio = require('socket.io-client');
console.log(process.argv);

var socket = socketio('http://' + process.argv[2]);

var sendName = {
    "name": process.argv[3],
    "type": "sensor"
};
console.log(sendName);

socket.on('connect', function(){
    // We connect so now we send our name
    socket.emit('name', sendName);

    // Send a heartrate chnage event
    var heartrate = Number(process.argv[4]);
    socket.emit('heartbeat', {'heartbeat': heartrate});
});
socket.on('disconnect', function() {
    console.log('disconnected');
});

