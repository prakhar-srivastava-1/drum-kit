document.getElementById("year").innerHTML = new Date().getFullYear();

// When drums are clicked
var allButtons = document.querySelectorAll(".drum");
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function() {
    var drumHit = identifyButton(this.innerHTML);
    buttonAnimation(this.innerHTML);
    playSound("sounds/" + drumHit);
  });
}

// When keys are pressed to play drums
document.addEventListener("keydown", function(event) {
  var drumHit = identifyButton(event.key);
  buttonAnimation(event.key);
  playSound("sounds/" + drumHit);
});

// Play the mp3 audio file
function playSound(filePath) {
  var audio = new Audio(filePath);
  audio.play();
}

// Identify which button was pressed and get the correspoding mp3 file
function identifyButton(buttonText) {
  var drumHit = "";
  switch (buttonText) {
    case 'w': drumHit = "tom-1.mp3"
      break;
    case 'a': drumHit = "tom-2.mp3"
      break;
    case 's': drumHit = "tom-3.mp3"
      break;
    case 'd': drumHit = "tom-4.mp3"
      break;
    case 'j': drumHit = "snare.mp3"
      break;
    case 'k': drumHit = "crash.mp3"
      break;
    case 'l': drumHit = "kick-bass.mp3"
      break;
    default:
      console.log(buttonText + " - Invalid Key!");
  }
  return drumHit;
}

// Add animation to button pressed
function buttonAnimation(buttonPressed) {
  var activeButton = document.querySelector("." + buttonPressed);
  activeButton.classList.add("pressed");

  // add a delay (ms) and then remove the pressed class
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
