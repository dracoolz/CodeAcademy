let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Generate random numbers for target
function generateTarget() {
  const randomNum = Math.floor(Math.random() * 10);
  return randomNum;
}

//Comparing user, computer, and secret target
function compareGuesses(user, computer, target) {
  if (Math.abs(user - target) < Math.abs(computer - target)) {
    return true;
  } else if (Math.abs(user - target) > Math.abs(computer - target)) {
    return false;
  } else {
    return true;
  }
}

//Updating score
function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

function advanceRound() {
  return currentRoundNumber += 1;
}
