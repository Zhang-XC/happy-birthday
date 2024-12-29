// Audio
let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
  if (state == false) {
      record.classList.add("on");
      toneArm.classList.add("play");
      setTimeout(() => {
      song.play();
      }, 1000);
  } else {
      record.classList.remove("on");
      toneArm.classList.remove("play");
      song.pause();
  }
  state = !state;
});

slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});

// Flip
$(document).on("click", ".flip-container", function () {
  $(this).toggleClass('hover');
});

// Float
$(document).ready(function () {
  $('.container').mouseenter(function () {
      $('.flip-container').stop().animate({
          top: '-90px'
      }, 'slow');
  }).mouseleave(function () {
      $('.flip-container').stop().animate({
          top: 0
      }, 'slow');
  });
});

// Blow out flames
let isMouseDown = false;
let flames = document.querySelectorAll('.flame');

function blowOutFlame(event) {
  let flame = event.target;
  let smoke = flame.nextElementSibling;

  flame.style.opacity = '0';
  if (smoke) {
      smoke.style.opacity = 1;
  }
}

document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

document.addEventListener('mousemove', (event) => {
  if (isMouseDown) {
      const flames = document.querySelectorAll('.flame');
      flames.forEach(flame => {
          const rect = flame.getBoundingClientRect();
          const isMouseOver = event.clientX > rect.left && event.clientX < rect.right &&
                              event.clientY > rect.top && event.clientY < rect.bottom;
          if (isMouseOver) {
              blowOutFlame({ target: flame });
          }
      });
  }
});