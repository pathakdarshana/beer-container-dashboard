const assert = require('chai').assert;
const expect = require('chai').expect;
const colors = require('colors');
const dashboard = require('../src/dashboard');

describe("Test Dashboard", function(){
	describe('#degreeCelcius()',function(){
		it('should return temperature with °C', function(){
			expect(dashboard.degreeCelcius(3)).to.eql('3 °C'.yellow);
		});
	});
	describe('#statusMessage()', function(){
		it('should return Normal', function(){
			expect(dashboard.statusMessage(true)).to.eql('Normal'.blue);
		});
		it('should return Alert!', function(){
			expect(dashboard.statusMessage(false)).to.eql('Alert!'.bold.red);
		});
	});
});