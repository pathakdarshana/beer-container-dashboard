const containers = require('./src/initContainer');
const allContainers = containers.initializeContainer();

for (let i = 0; i < allContainers.length; i++){
	console.log(`${allContainers[i].id} ${allContainers[i].initialTemperature}C ${allContainers[i].beerType}`);
}
