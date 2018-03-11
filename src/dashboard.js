const cTable = require('console.table');
const colors = require('colors');

const displayContainerInformation = (stats) => {
	let data =[];
	for (const[key, value] of Object.entries(stats)){
		data.push({ 
			'Container #' : key.underline.green, 
			CurrentTemperature : degreeCelcius(value.currentTemperature),
			Status: statusMessage(value.isWithinRange) 
		});
	}
	console.table(data);
}

const degreeCelcius = (temperature) => {
	return `${temperature.toString()} °C`.yellow;
}

const statusMessage = (isWithinRange) => {
	return isWithinRange == true ? 'Normal'.blue : 'Alert!'.bold.red;
}

module.exports = {displayContainerInformation, degreeCelcius, statusMessage};