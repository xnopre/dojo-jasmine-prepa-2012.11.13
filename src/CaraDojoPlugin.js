(function($) {
    // définition du plugin
    $.fn.caraDojoPlugin = function() {  
		var addButton = function() {
			$(this).after("<button>Modifier</button>");
		};
		$(this).each(addButton);
        return $(this);      
    };
})(jQuery);