$(document).ready(function(){

	$("#email").click(function() {
		$("#modal-container").show();
	});

	$('.buttons').click(function() {
		$("#modal-container").hide();
	});

	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});

	$(".circle").hover(function() {
		$("#resume").css("background-color", "black");
		$(".circle").css("background", "black");
		$(".circle").css("color", "black");
		$("#final").text("Coming Soon Maybe");
		$("#final").show();
	});

});