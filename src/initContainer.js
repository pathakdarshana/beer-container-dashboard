const BeerContainer = require('./beerContainer');
const data = require('../mockData/data');

const beerContainerInitData = data.getBeerContainerData();
const initializeContainer = () => {
	let containers = [];
	for (const[key, value] of Object.entries(beerContainerInitData)){
		containers.push(new BeerContainer(
			key, 
			value.initialTemperature,
			value.beerType
		));
 	};
 	return containers
}

module.exports = { initializeContainer };



