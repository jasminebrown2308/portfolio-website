var showMenu;

$( function() {
	showMenu = false;
	$("#menu-sensor").mouseenter( function () {
		if (showMenu) {
			$("#menu").css("transition", "transform 0.2s ease");
			$("#menu").css("transform", "translateY(-2vh)");
		}
	});
});

$(window).scroll(function() {
	if ($(window).scrollTop() > window.innerHeight) {
		showMenu = true;
		var menuHeight = (window.innerHeight * 0.11) + 24;
		$("#menu").css("position", "fixed");
		$("#menu").css("transform", "translateY(-" + menuHeight + "px)");
	} else {
		showMenu = false;
		$("#menu").css("position", "absolute");
		$("#menu").css("transform", "translateY(0)");
		$("#menu").css("transition", "");
	}
});

function jumpToSection(elementID) {
	const element = $("#"+elementID)[0]
	element.scrollIntoView();
}