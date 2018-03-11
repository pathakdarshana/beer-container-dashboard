const TemperatureSensor = require('../src/temperatureSensor');
const config = require('../config.json');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Check Temperature sensor', function(){
	describe('#getCurrentTemperature()', function(){
		it('should return 5 as current temperature',  function(){
			let temperatureSensor = new TemperatureSensor(5);
			assert.equal(temperatureSensor.getCurrentTemperature(), 5);
		});
	});

	describe('#updatedCurrentTemperature()', function(){
		it("should return temperature within sensor's temperature range", function(){
			let temperatureSensor = new TemperatureSensor(5);
			const min = config.temperatureSensor.range.min;
			const max = config.temperatureSensor.range.max;
			expect(temperatureSensor.updatedCurrentTemperature()).to.be.within(min, max);
		});
	});
});

