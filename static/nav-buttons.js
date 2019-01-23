var descriptionButton = document.getElementById('descriptionbutton');
var contactButton = document.getElementById('contactbutton');
var backToTopButton = document.getElementById('backtotopbutton');

var descriptionElement = document.getElementById('description');
var contactElement = document.getElementById('contact-me')


descriptionButton.onclick = function () {
  descriptionElement.scrollIntoView();
};
contactButton.onclick = function () {
  contactElement.scrollIntoView();
};
backToTopButton.onclick = function () {
  window.scrollTo(0, 0);
};




// make back to top button appear when page is not fully scrolled up.
