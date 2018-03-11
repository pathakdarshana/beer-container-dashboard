const config = require('../config.json');
const startTime = Date.now();

class TemperatureSensor {
	constructor(initialTemperature){
		this.currentTemperature = initialTemperature
	}

	getCurrentTemperature(){
		if(this.needTemperatureUpdate()){
			this.updateCurrentTemperature();
		}
		return this.currentTemperature;
 	}

 	needTemperatureUpdate(){
 		let interval = config.temperatureSensor.checkInterval
 		let elapsedSeconds = Math.floor((Date.now() - startTime)/1000);
	 	return ((elapsedSeconds % interval === 0) && elapsedSeconds != 0) ? true : false;
 	}

 	updateCurrentTemperature(){
 		const min = config.temperatureSensor.range.min;
		const max = config.temperatureSensor.range.max;
		this.currentTemperature =  Math.floor(Math.random() * (max - min +1)) + min;
 	}
}

module.exports = TemperatureSensor; 