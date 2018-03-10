const temperatureSensor = require('./temperatureSensor');
const mockData = require('../mockData/mockData');

const beerData = mockData.getBeerData();

const temperatureMonitor = (containers) =>{

	let stats = {};
	for (let i = 0; i < containers.length; i++){
		let container = containers[i].id;
		let lower = beerData[containers[i].beerType]['temperatureRange']['lower'];
		let upper = beerData[containers[i].beerType]['temperatureRange']['upper'];
		let currentTemperature = temperatureSensor();
		stats[container] = {
			currentTemperature: currentTemperature,
			isWithinRange: isWithinRange(lower,upper,currentTemperature)
		};
	}
	return stats;
}

const isWithinRange = (lower,upper,currentTemperature) => {
	return (currentTemperature >= lower && currentTemperature <= upper) ? true : false
}

module.exports = temperatureMonitor;