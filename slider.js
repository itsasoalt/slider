$(document).ready(function() {
	$('#slide-1').show();

	$('.next').click(function() {
		var actual = $('.slides li:visible');
		var siguiente = actual.next();

		if (siguiente.length == 0) {
			siguiente = $('#slide-1');
		}

		actual.hide();
		siguiente.show();
	});

	$('.prev').click(function() {
		var actual = $('.slides li:visible');
		var anterior = actual.prev();

		if (anterior.length == 0) {
			anterior = $('#slide-4');
		}

		actual.hide();
		anterior.show();
	});

});