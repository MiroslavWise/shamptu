import anime from "animejs";

const img = document.getElementsByTagName('img')

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