const mockData = require('./mockData/mockData');

const beerData = mockData.getBeerData();

const temperatureRange = (beerType) => {
	return {
		lower: beerData[beerType]['temperatureRange']['lower'],
		upper: beerData[beerType]['temperatureRange']['upper']
	};
}

module.exports = temperatureRange;