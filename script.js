var select = function(s) {
    return document.querySelector(s);
  },
  path = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/",
  animationWindow = select('#animationWindow'),
  anim = lottie.loadAnimation({
   container: animationWindow, 
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: path + 'infinity_ball.json' 
});