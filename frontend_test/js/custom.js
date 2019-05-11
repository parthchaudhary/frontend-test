$(document).ready(function () {
	// product slider initialization
	$('.product-slider').slick({
		arrows: false,
		dots: true,
		// autoplay: true,
		adaptiveHeight: true
	});

	// text button enable disable
	$('#chat-input').on("keyup", action);

	function action() {
		if ($('#chat-input').val().length > 0) {
			$('#sent').prop("disabled", false);
			$('#sent').removeClass("disabled");
		} else {
			$('#sent').prop("disabled", true);
			$('#sent').addClass("disabled");
		}
	}
});


// equal box height jquery code
equalheight = function (container) {

	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
	$(container).each(function () {

		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}

$(window).load(function () {
	equalheight('.main article');
});


$(window).resize(function () {
	equalheight('.main article');
});