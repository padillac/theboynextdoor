var descriptionbutton = document.getElementById('descriptionbutton');
var contactbutton = document.getElementById('contactbutton');
var backtotopbutton = document.getElementById('backtotopbutton');


descriptionbutton.onclick = function () {
  window.scrollTo(0, 2000);
};
contactbutton.onclick = function () {
  window.scrollTo(0, 3500);
};
backtotopbutton.onclick = function () {
  window.scrollTo(0, 0);
};




// make back to top button appear when page is not fully scrolled up.
