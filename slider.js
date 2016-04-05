$(document).ready(function() {
	$('#slide-1').show();
	$('#nav-1').addClass("active-cd");

	$('.next').click(function() {
		var actual = $('.slides li:visible');
		var siguiente = actual.next();
		var actualfull = $('.active-cd');
		var nextfull = actualfull.next();

		if (siguiente.length == 0) {
			siguiente = $('#slide-1');
			nextfull = $('#nav-1');
		}

		actual.hide();
		siguiente.show();
		actualfull.removeClass("active-cd");
		nextfull.addClass("active-cd");

	});

	$('.prev').click(function() {
		var actual = $('.slides li:visible');
		var anterior = actual.prev();
		var actualfull = $('.active-cd');
		var prevfull = actualfull.prev();

		if (anterior.length == 0) {
			anterior = $('#slide-4');
			prevfull = $('#nav-4');
		}

		actual.hide();
		anterior.show();
		actualfull.removeClass("active-cd");
		prevfull.addClass("active-cd");
	});

	$('.nav li').click(function(){

		$('.active-cd').removeClass("active-cd");
		$('.slides li:visible').hide();
		$(this).addClass("active-cd");
		var numero = $(this).data('cd');
		$('.slides li[data-n='+numero+']').show();

	});

});