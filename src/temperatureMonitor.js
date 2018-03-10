const beerTemperatureRange = require('./beer');
const temperatureSensor = require('./temperatureSensor');

const temperatureMonitor = (containers) =>{
	let stats = {};
	for (let i = 0; i < containers.length; i++){
		let container = containers[i].id;
		stats[container] = getContainerStat(containers[i]);
	}
	return stats;
}

const getContainerStat = (container) => {
	let range = beerTemperatureRange(container.beerType);
	let currentTemperature = temperatureSensor();

	return {
		currentTemperature: currentTemperature,
		isWithinRange: isWithinRange(range.lower,range.upper,currentTemperature)
	}
}

const isWithinRange = (lower,upper,currentTemperature) => {
	return (currentTemperature >= lower && currentTemperature <= upper) ? true : false
}

module.exports = temperatureMonitor;