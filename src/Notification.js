(function() {

	notification = {
		display: function($elem, text) {
			$elem.text(text);
			$elem.css("display", "block");
			setTimeout(function() {
				$elem.text("");
				$elem.css("display", "none");
			}, 2000 );
		}
	};
})();
