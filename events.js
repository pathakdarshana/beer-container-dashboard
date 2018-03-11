var events = require('events');
const sleep = require('sleep');

var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function (message) {
  console.log(message);
}

//Assign the eventhandler to an event:
eventEmitter.on('darshana', myEventHandler);

let count = 1;
while(true){
	if(count % 5 === 0){
		eventEmitter.emit('darshana',` Event sent data: ${count}`);
	}
	sleep.sleep(1);
	count += 1;

}
//Fire the 'scream' event:
