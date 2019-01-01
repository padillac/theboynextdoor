
var bannerImg1 = document.getElementById('banner-image1');
var bannerImg2 = document.getElementById('banner-image2');

setInterval(function() {
  bannerImg1.style = 'visibility: hidden;';
  bannerImg2.style = 'visibility: visible;';
}, 6000);
setTimeout(function() {
  setInterval(function() {
    bannerImg1.style = 'visibility: visible;';
    bannerImg2.style = 'visibility: hidden;';
  }, 6000);
}, 3000);
