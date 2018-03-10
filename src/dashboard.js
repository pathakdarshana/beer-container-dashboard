const cTable = require('console.table');
const colors = require('colors');

const displayContainerInformation = (stats) => {
	let data =[];
	for (const[key, value] of Object.entries(stats)){
		let status = ( value.isWithinRange == true) ? 'Normal'.blue : 'Alert!'.bold.red; 
		data.push({ 
			ContainerNumber : key.underline.green, 
			CurrentTemperature : `${value.currentTemperature.toString()} °C`.yellow,
			Status: status 
		});
	}
	console.table(data);
}

module.exports = displayContainerInformation;