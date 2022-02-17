import anime from 'animejs/lib/anime.es.js'

img.addEventListener("mouseover", function() {
    anime({
     targets: '.image',
     translateX: function() {
       return anime.random(0, 50);
     },
     translateY: function() {
       return anime.random(0, 50);
     }
 })})