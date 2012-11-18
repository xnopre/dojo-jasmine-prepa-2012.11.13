describe("Maths", function() {
	it("namespace caradojo must exist", function() {
		expect(caradojo).toBeDefined();
		expect(caradojo).not.toBeUndefined(); // on peut utiliser 'not'
	});

	describe("isFloat", function() {

		it("isFloat function must exist", function() {
			expect(caradojo.isFloat).toBeDefined();
		});

		it("isFloat must be defined as a function", function() {
			expect(caradojo.isFloat).toEqual(jasmine.any(Function));
		});

		it("isFloat return false with arg = 12", function() {
			expect(caradojo.isFloat("12")).toBe(false); 
			expect(caradojo.isFloat("12")).toBeFalsy(); // Idem
		});
		
		it("isFloat return true with arg = 12.32", function() {
			expect(caradojo.isFloat("12.32")).toBe(true);
		});

		it("isFloat return false with arg = toto", function() {
			expect(caradojo.isFloat("toto")).toBe(false);
		});

		it("isFloat return false with arg = 12a", function() {
			expect(caradojo.isFloat("12a")).toBe(false);
		});

		it("isFloat return false with arg = 12,4", function() {
			expect(caradojo.isFloat("12,4")).toBe(false);
		});

		it("isFloat return false with arg = 1.2.3", function() {
			expect(caradojo.isFloat("1.2.3")).toBe(false);
		});
	});

	describe("formatNumber", function() {

		it("formatNumber function must exist", function() {
			expect(caradojo.formatNumber).toBeDefined();
			expect(caradojo.formatNumber).toEqual(jasmine.any(Function));
		});

		it("formatNumber return '12.32' with arg = 12.32", function() {
			expect(caradojo.formatNumber(12.32)).toEqual('12.32');
		});

		it("formatNumber return '12.32' with arg = 12.32245", function() {
			expect(caradojo.formatNumber(12.32245)).toEqual('12.32');
		});

		it("formatNumber return '12' with arg = 12", function() {
			expect(caradojo.formatNumber(12)).toEqual('12');
		});
		
		it("formatNumber return '-15' with arg = '-15'", function() {
			expect(caradojo.formatNumber(-15)).toEqual('-15');
		});
		
		it("formatNumber return '-13.2' with arg = '-13.2'", function() {
			expect(caradojo.formatNumber(-13.2)).toEqual('-13.2');
		});
		
		it("formatNumber return '12.2' with arg = '12.2'", function() {
			expect(caradojo.formatNumber(12.2)).toEqual('12.2');
		});
		
		it("formatNumber return '12.39' with arg = '12.387'", function() {
			expect(caradojo.formatNumber(12.387)).toEqual('12.39');
		});
		
		it("formatNumber return '-12.39' with arg = '-12.387'", function() {
			expect(caradojo.formatNumber(-12.387)).toEqual('-12.39');
		});
		
		it("formatNumber return -12 which is greater than -15 with arg = -12", function() {
			expect(caradojo.formatNumber(-12)).toBeGreaterThan(-15);
		});
		
		it("formatNumber return -12 which is less than -10 with arg = -12", function() {
			expect(caradojo.formatNumber(-12)).toBeLessThan(-10);
		});
	});
});
