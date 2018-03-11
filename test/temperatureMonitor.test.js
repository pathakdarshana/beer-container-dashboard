const assert = require('chai').assert;
const expect = require('chai').expect;
const BeerContainer = require('../src/beerContainer');
const monitor = require('../src/temperatureMonitor');

describe('temperature monitor', function(){
	describe('#isWithinRange()', function(){
		it('should return true ', function(){
			expect(monitor.isWithinRange(2, 5, 4)).to.eql(true); 
		});

		it('should return false ', function(){
			expect(monitor.isWithinRange(2, 5, 6)).to.eql(false); 
		});
	});
});


