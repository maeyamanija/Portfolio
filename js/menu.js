const trig = document.querySelector('#burger');
const closer = document.querySelector('#closebtn');

trig.addEventListener('click', openNav);
closer.addEventListener('click', closeNav);

function openNav() {
  document.getElementById("burger").style.opacity = 0;
  document.getElementById("myNav").style.transform = "translateX(0%)";
  document.getElementById("middle").style.transform = "translateX(-150%)";
}

function closeNav() {
  document.getElementById("burger").style.opacity = 1;
  document.getElementById("myNav").style.transform = "translateX(100%)";
  document.getElementById("middle").style.transform = "translateX(0%)";
}
