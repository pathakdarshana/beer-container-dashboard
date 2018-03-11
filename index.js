const sleep = require('sleep');
const containers = require('./src/initContainer');
const allContainers = containers.initializeContainer();
const monitor = require('./src/temperatureMonitor');
const dashboard = require('./src/dashboard');
const interval = require('./config.json');

while(true){
	const stats = monitor.temperatureMonitor(allContainers);
	dashboard(stats);
	sleep.sleep(interval['dashboardRefreshInterval']);
}
