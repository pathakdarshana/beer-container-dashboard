const sleep = require('sleep');
const containers = require('./src/initContainer');
const monitor = require('./src/temperatureMonitor');
const dashboard = require('./src/dashboard');
const interval = require('./config.json');

const allContainers = containers.initializeContainer();


while(true){
	const stats = monitor.temperatureMonitor(allContainers);
	dashboard.displayContainerInformation(stats);
	sleep.sleep(interval['dashboardRefreshInterval']);
}
