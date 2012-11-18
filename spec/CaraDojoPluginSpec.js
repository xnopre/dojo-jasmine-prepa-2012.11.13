describe("Demo jasmine-jquery", function() {
	describe("DomSpec", function() {
		beforeEach(function() {
			loadFixtures('TestDom.html');
		});
		
		it("Ajoute le bouton 'Modifier'", function() {
			$(".prop").caraDojoPlugin();
			expect($(".prop").next()).toBe("button");
			$(".prop").next().each(function(){
				expect($(this)).toHaveText("Modifier");
			});
		});

	});
});
	