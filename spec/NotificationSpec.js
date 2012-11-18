describe("Demo jasmine clock", function() {
	describe("La fonctionnalité de notification", function() {
		beforeEach(function() {
			loadFixtures('notification.html');
			jasmine.Clock.useMock();
		});

		it("namespace 'notification' doit exister", function() {
			expect(notification).toBeDefined();
		});

		it("affiche le message 'test notif' pendant 2000ms", function() {
			expect($("#notificationDiv").css("display")).toEqual("none");

			notification.display($("#notificationDiv"), "Message de test");
			
			expect($("#notificationDiv").text()).toEqual("Message de test");
			expect($("#notificationDiv").css("display")).not.toEqual("none");
			jasmine.Clock.tick(2001);
			expect($("#notificationDiv").css("display")).toEqual("none");
			expect($("#notificationDiv").text()).toEqual("");
		});
	});
});
	