const assert = require('chai').assert;
const expect = require('chai').expect;
const temperatureRange = require('../src/beer');

describe('Temperature Range for a beer type', function(){
	it('should return lower range for Beer2', function(){
		expect(temperatureRange("beer2").lower).to.eql(5);
	});
	it('should return upper range for Beer2', function(){
		expect(temperatureRange("beer2").upper).to.eql(6);
	});
});