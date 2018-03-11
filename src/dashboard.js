const cTable = require('console.table');
const colors = require('colors');
var events = require('events');
const sleep = require('sleep');

var eventEmitter = new events.EventEmitter();

const displayContainerInformation = (stats) => {
	let data =[];
	for (const[key, value] of Object.entries(stats)){
		data.push({ 
			'Container#' : key.underline.green, 
			CurrentTemperature : degreeCelcius(value.currentTemperature),
			Status: statusMessage(value.isWithinRange)
		});
		triggerEvent(value.isWithinRange, key);
	}
	console.log(" ");
	console.table(data);
}

const degreeCelcius = (temperature) => {
	return `${temperature.toString()} °C`.yellow;
}

const statusMessage = (isWithinRange) => {
	return isWithinRange == true ? 'Normal'.blue : 'Alert!'.bold.red;
}

const triggerEvent = (isWithinRange, key) => {
	if (!isWithinRange){
		eventEmitter.emit('temperatureOutOfRange', key )
	}
}

const eventHandler = (data) => {
	console.log('Notification:'.underline.red,' Temperature out of range, alert! =>',data.bold.red);
}

eventEmitter.on('temperatureOutOfRange', eventHandler);

module.exports = {displayContainerInformation, degreeCelcius, statusMessage};