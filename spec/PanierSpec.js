describe("Test jasmine-ajax", function() {

	var TestResponses = {
		search: {
			success: {
				status: 200,
				responseText: '{"id":"4bb9fd9f3db7b7138dbd229a"}'
			}
		}
	};

	var simulateSuccessOnEachRequest = function() {
		for(var i = 0; i < ajaxRequests.length; i++) {
			var request = ajaxRequests[i];
			request.response(TestResponses.search.success);
		}
	};
	
	describe("Lorsque l'on a un panier rempli d'article", function() {
		beforeEach(function() {
			loadFixtures('panier.html');
			jasmine.Ajax.useMock();
			clearAjaxRequests();
		});
		
		it("on peut sauvegarder chaque article un a un", function() {
			spyOn(jQuery,'ajax').andCallThrough(); 
			var size = $('.article').length;
			panier.save();
			
			simulateSuccessOnEachRequest();
			
			expect(jQuery.ajax).toHaveBeenCalled();
			expect(jQuery.ajax.calls.length).toEqual(size);
			expect($("#result div").length).toEqual(size);
		});
		
		it("on peut simuler la valeur de retour d'une fonction", function() {
			spyOn(jQuery,'ajax').andReturn(12);
			expect($.ajax({url:"test"})).toEqual(12);
		});
		
		it("on peut mocker une fonction", function() {
			spyOn(jQuery,'ajax').andCallFake(function(){
				$('#result').text('mock!');
			});
			panier.save();
			
			expect($('#result').text()).toEqual('mock!');
		});
	});
});
