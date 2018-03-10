module.exports.getCurrentTemperature = () => {
	const min = 2;
	const max = 10;
	return Math.floor(Math.random() * (max - min +1)) + min;
}
