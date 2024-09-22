var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  setTimeout(() => {
    $("#" + randomChosenColour)
      .fadeIn()
      .fadeOut()
      .fadeIn();
  }, 50);

  var beat = new Audio("./sounds/" + randomChosenColour + ".mp3");
  beat.play();
}

nextSequence();
