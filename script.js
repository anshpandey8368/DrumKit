document.addEventListener("DOMContentLoaded", function() {
  var areas = document.querySelectorAll('area');

  areas.forEach(function(area) {
    area.addEventListener('click', function() {
      var sound = new Audio(this.getAttribute('data-sound'));
      sound.play();
    });
  });

  // Keyboard events for sounds
  document.addEventListener("keypress", function(event) {
    var key = event.key.toLowerCase();
    createSound(key);
    buttonAnimation(key);
  });
});

function createSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("Invalid key pressed");
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("area[data-sound='sounds/" + currentKey + ".mp3']");
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
