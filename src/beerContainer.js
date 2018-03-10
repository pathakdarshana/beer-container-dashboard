const temperatureSensor = require('./temperatureSensor');

module.exports = class BeerContainer {
	constructor(id, initialTemperature, beerType){
		this.id = id;
		this.initialTemperature = initialTemperature;
		this.beerType = beerType;
	}

	getCurrentTemperature(){
		return temperatureSensor.getCurrentTemperature();
	}
}

