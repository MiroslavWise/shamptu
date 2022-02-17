import anime from 'animejs/lib/anime.es.js'

const img = document.getElementsByTagName('img')

img.addEventListener("mouseover", function() {
    anime({
     targets: 'img',
     translateX: function() {
       return anime.random(0, 50);
     },
     translateY: function() {
       return anime.random(0, 50);
     }
 })})