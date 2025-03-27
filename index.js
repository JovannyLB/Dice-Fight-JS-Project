const titleElement = document.querySelector("#title");
const playerOneImageElement = document.querySelector(".img1");
const playerTwoImageElement = document.querySelector(".img2");

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function getDiceImage(rolledNumber) {
  return "./images/dice" + rolledNumber + ".png";
}

function diceFight() {
  var playerOneRoll = rollDice(6);
  var playerTwoRoll = rollDice(6);

  playerOneImageElement.setAttribute("src", getDiceImage(playerOneRoll));
  playerTwoImageElement.setAttribute("src", getDiceImage(playerTwoRoll));

  if (playerOneRoll === playerTwoRoll) {
    titleElement.textContent = "🎊 👔 🎊";
  } else if (playerOneRoll > playerTwoRoll) {
    titleElement.textContent = "🎊 Player 1 wins";
  } else {
    titleElement.textContent = "Player 2 wins 🎊";
  }
}
