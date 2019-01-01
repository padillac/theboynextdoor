var descriptionbutton = document.getElementById('descriptionbutton');
var contactbutton = document.getElementById('contactbutton');
var backtotopbutton = document.getElementById('backtotopbutton');


descriptionbutton.onclick = function () {
  window.scroll(0,1000);
}
contactbutton.onclick = function () {
  window.scroll(0,1500);
}
backtotopbutton.onclick = function () {
  window.scroll(0,2000);
}




// make back to top button appear when page is not fully scrolled up.
