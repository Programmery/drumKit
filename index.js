var drButtonNumber = document.querySelectorAll(".drum");

//Detect Button click
for (var i = 0; i < drButtonNumber.length; i++) {
  drButtonNumber[i].addEventListener("click", function() {
    keyDetect(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
//Detect Keyboard press
document.addEventListener("keypress", function(event) {
  keyDetect(event.key);
  buttonAnimation(event.key);
});

//SOUND
function keyDetect(key) {
  switch (key) {
    case "w":
    case "W":
      var crash = new Audio("sounds/0.mp3");
      crash.play();
      break;
    case "a":
    case "A":
      var kick = new Audio("sounds/1.mp3");
      kick.play();
      break;
    case "s":
    case "S":
      var snare = new Audio("sounds/2.mp3");
      snare.play();
      break;
    case "d":
    case "D":
      var tom1 = new Audio("sounds/3.mp3");
      tom1.play();
      break;
    case "j":
    case "J":
      var tom2 = new Audio("sounds/4.mp3");
      tom2.play();
      break;
    case "k":
    case "K":
      var tom3 = new Audio("sounds/5.mp3");
      tom3.play();
      break;
    case "l":
    case "L":
      var tom4 = new Audio("sounds/6.mp3");
      tom4.play();
      break;
    default:
      console.log(this.innerHTML + " click and " + event.key + " is not assigned to any drum");
  }
}

//ANIMATION
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton === null) {
    console.log("Button is not assignted to drums");
  } else {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }

}
