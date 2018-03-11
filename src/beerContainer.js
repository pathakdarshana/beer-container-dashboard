const TemperatureSensor = require('./temperatureSensor');

module.exports = class BeerContainer {
	constructor(id, initialTemperature, beerType){
		this.id = id;
		this.initialTemperature = initialTemperature;
		this.beerType = beerType;
		this.temperatureSensor = new TemperatureSensor(initialTemperature);
	}

	getCurrentTemperature(){
		return this.temperatureSensor.getCurrentTemperature();
	}
}

