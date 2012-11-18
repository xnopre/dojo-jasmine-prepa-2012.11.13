var panier = {
	save:function(){
		$('.article').each(function() {
			$.ajax({  
			  url: 'friends',
			  dataType: 'json',
			  success: function(json) {
				//alert("success");
				$('#result').append($('<div>').addClass('ok'));
			  },
			  error: function(jqXHR, textStatus, errorThrown) {
				//alert("error ajax dans panier");
				console.log("error ajax dans panier : textStatus=",textStatus,", errorThrown=",errorThrown);
			  }
			});
		});
	}
}