
var bannerImg1 = document.getElementById('banner-image1');
var bannerImg2 = document.getElementById('banner-image2');

setInterval(function() {
  bannerImg1.animate([{opacity: 1}, {opacity: 0}], {duration: 1000});
  bannerImg2.animate([{opacity: 0}, {opacity: 1}], {duration: 1000});
}, 6000);
setTimeout(function() {
  setInterval(function() {
    bannerImg1.animate([{opacity: 0}, {opacity: 1}], {duration: 1000});
    bannerImg2.animate([{opacity: 1}, {opacity: 0}], {duration: 1000});
  }, 6000);
}, 3000);
