const objectList = ['chair', 'desk', 'lamp', 'pen', 'table'];
const placeList = ['beach', 'cave', 'desert', 'forest', 'mountain'];
const animalList = ['dog', 'cat', 'bird', 'fish', 'mouse'];

// Pick a random word list
const wordList = [objectList, placeList, animalList][Math.floor(Math.random() * 3)];

// Pick a random word from the list
const word = wordList[Math.floor(Math.random() * wordList.length)];

// Create an array of underscores the same length as the word
let underscores = [];
for (let i = 0; i < word.length; i++) {
  underscores.push('_');
}

let lives = 6;

// The main game loop
while (lives > 0) {
  // Clear the console
  console.clear();

  // Print a series of dashes
  for (let i = 0; i < 4; i++) {
    console.log('-');
  }

  // Print a message indicating the word list
  if (wordList === objectList) {
    console.log('Word list: objects');
  } else if (wordList === placeList) {
    console.log('Word list: places');
  } else if (wordList === animalList) {
    console.log('Word list: animals');
  }

  // Print the current state of the game
  console.log(underscores.join(' '));
  console.log(`Lives: ${lives}`);

  // Get a letter from the user
  const letter = prompt('Guess a letter:');

  // Check if the letter is in the word
  let correct = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      underscores[i] = letter;
      correct = true;
    }
  }

  // If the letter is not in the word, subtract a life
  if (!correct) {
    lives--;
  }

  // Check if the player has won
  if (underscores.join('') === word) {
    console.log('You win!');
    break;
  }
}

// The player has lost
if (lives === 0) {
  console.log('You lose!');
}
