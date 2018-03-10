const sleep = require('sleep');
const containers = require('./src/initContainer');
const allContainers = containers.initializeContainer();
const temperatureMonitor = require('./src/temperatureMonitor');
const dashboard = require('./src/dashboard');

while(true){
	const stats = temperatureMonitor(allContainers);
	dashboard(stats);
	sleep.sleep(5);
}
