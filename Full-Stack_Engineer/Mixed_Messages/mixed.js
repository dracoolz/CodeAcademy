const random = num => {
  return Math.floor(Math.random() * num);
}

const mixMessages = {
  colorOfTheDay: ['White', 'Black', 'Gray'],
  coffee: ['Latte', 'Cappucino', 'Black'],
  luckyNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

let mixArray = [];

for (let message in mixMessages) {
  let randomNum = random(mixMessages[message].length);
  switch (message) {
    case 'colorOfTheDay':
      mixArray.push(`Color of the day is ${mixMessages[message][randomNum]}`);
      break;
    case 'coffee':
      mixArray.push(`Coffee of the day is ${mixMessages[message][randomNum]}`);
      break;
    case 'luckyNumber':
      mixArray.push(`Coffee of the day is ${mixMessages[message][randomNum]}`);
      break;
    default:
      mixArray.push('none');
  }
}

console.log(mixArray.join('\n'));