
var bannerImg1 = document.getElementById('banner-image1');
var bannerImg2 = document.getElementById('banner-image2');

setInterval(function() {
  bannerImg1.animate({opacity: 0});
  bannerImg2.animate({opacity: 1});
}, 6000);
setTimeout(function() {
  setInterval(function() {
    bannerImg1.animate({opacity: 1});
    bannerImg2.animate({opacity: 0});
  }, 6000);
}, 3000);
