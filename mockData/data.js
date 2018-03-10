const beerData = require('./beer.json');
const beerContainerData = require('./beerContainer.json');

const getBeerData = () => {return beerData;}

const getBeerContainerData = () => {return beerContainerData;} 

module.exports = { getBeerData, getBeerContainerData };