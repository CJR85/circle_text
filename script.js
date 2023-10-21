'use strict';
let text = document.querySelector('.text');

document.addEventListener('mousemove', function (e) {
  text.style.left = e.pageX + 'px';
  text.style.top = e.pageY + 'px';
});
