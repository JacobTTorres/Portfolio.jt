$(document).ready(function () {
	$('#impact').mouseenter(function () {
		$('#impactInfo').toggle('scale');
	});
	$('.projectLink').mouseleave(function () {
		$('#impactInfo').fadeOut(200);
	});
	$('#sun').mouseenter(function () {
		$('#sunInfo').toggle('scale');
	});
	$('.projectLink').mouseleave(function () {
		$('#sunInfo').fadeOut(200);
	});
	$('#loop').mouseenter(function () {
		$('#loopInfo').toggle('scale');
	});
	$('.projectLink').mouseleave(function () {
		$('#loopInfo').fadeOut(200);
	});
	$('#google').mouseenter(function () {
		$('#googleInfo').toggle({ effect: 'scale', direction: 'horizontal' });
	});
	$('.projectLink').mouseleave(function () {
		$('#googleInfo').fadeOut(200);
	});
});
