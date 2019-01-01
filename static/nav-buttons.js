var descriptionbutton = document.getElementById('descriptionbutton');
var contactbutton = document.getElementById('contactbutton');
var backtotopbutton = document.getElementById('backtotopbutton');


descriptionbutton.onclick = function () {
  window.scrollTo(0,1000);
  alert('DESCRIPTION');
}
contactbutton.onclick = function () {
  window.scrollTo(0,1500);
  alert('CONTACT');
}
backtotopbutton.onclick = function () {
  window.scrollTo(0,0);
  alert('BACKTOTOP');
}




// make back to top button appear when page is not fully scrolled up.
