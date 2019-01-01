var descriptionbutton = document.getElementById('descriptionbutton');
var contactbutton = document.getElementById('contactbutton');
var backtotopbutton = document.getElementById('backtotopbutton');


descriptionbutton.onclick = function () {
  alert('DESCRIPTION');
  window.scroll(0, 1000);
}
contactbutton.onclick = function () {
  alert('CONTACT');
  window.scroll(0, 1500);
}
backtotopbutton.onclick = function () {
  alert('BACKTOTOP');
  window.scroll(0, 0);
}




// make back to top button appear when page is not fully scrolled up.
