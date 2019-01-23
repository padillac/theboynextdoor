var descriptionButton = document.getElementById('descriptionbutton');
var contactButton = document.getElementById('contactbutton');
var backToTopButton = document.getElementById('backtotopbutton');

var title = document.getElementById('title');
var descriptionElement = document.getElementById('description');
var contactElement = document.getElementById('contact-me2');


descriptionButton.onclick = function () {
  descriptionElement.scrollIntoView();
};
contactButton.onclick = function () {
  contactElement.scrollIntoView();
};
backToTopButton.onclick = function () {
  title.scrollIntoView();
};




// make back to top button appear when page is not fully scrolled up.
