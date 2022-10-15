var showMenu;

/* When document loads, initialise variable and assign function to make menu appear when hovering over the top of the screen */
$(function () {
  showMenu = false;
  $("#menu-sensor").mouseenter(function () {
    if (showMenu) {
      $("#menu").css("transition", "transform 0.3s ease");
      $("#menu").css("transform", "translateY(-2vh)");
    }
  });
});

/* When scrolling, check if the user is on the main section (in which case the menu should be at the top and scroll with the page) 
or another section (menu should be hidden unless the user hovers at the top of the screen) */
$(window).scroll(function () {
  if ($(window).scrollTop() > window.innerHeight) {
    showMenu = true;
    var menuHeight = window.innerHeight * 0.11 + 24; // the height of the menu is 11vh plus the 24px font
    $("#menu").css("position", "fixed");
    $("#menu").css("transform", "translateY(-" + menuHeight + "px)"); // moves it off the top of the screen
  } else {
    showMenu = false;
    $("#menu").css("position", "absolute");
    $("#menu").css("transform", "translateY(0)");
    $("#menu").css("transition", "");
  }
});

/* Scroll to the specified section of the page */
function jumpToSection(elementID) {
  const element = $("#" + elementID)[0];
  element.scrollIntoView();
}
