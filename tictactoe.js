while (true) {
  // Create an empty board
  let board = [[null, null, null], [null, null, null], [null, null, null]];

  // Define the players
  let players = ['X', 'O'];

  // Function to print the board to the console
  function printBoard() {
    console.clear();
    console.log("---------------------");
    console.log("---------------------");
    console.log("---------------------");
    console.log("---------------------");
    console.log(` ${board[0][0] || ' '} | ${board[0][1] || ' '} | ${board[0][2] || ' '} `);
    console.log('-----------');
    console.log(` ${board[1][0] || ' '} | ${board[1][1] || ' '} | ${board[1][2] || ' '} `);
    console.log('-----------');
    console.log(` ${board[2][0] || ' '} | ${board[2][1] || ' '} | ${board[2][2] || ' '} `);
  }

  // Function to check if a player has won
  function checkWin(player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
        return true;
      }
    }

    // Check diagonals
    if (board[0][0] === player && board[11] === player && board[2][2] === player) {
      return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      return true;
    }

    // No win
    return false;
  }

  // Function to check if the board is full
  function checkFull() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === null) {
          return false;
        }
      }
    }
    return true;
  }

  // Main game loop
  let currentPlayer = 0;
  while (true) {
    // Get the row and column from the player
    let row = parseInt(prompt(`Player ${players[currentPlayer]}, enter a row (0-2):`));
    let col = parseInt(prompt(`Player ${players[currentPlayer]}, enter a column (0-2):`));

    // Make sure the spot is empty
    if (board[row][col] !== null) {
      console.log("That spot is already taken!");
      continue;
    }

    // Place the piece
    board[row][col] = players[currentPlayer];

    // Print the board
    printBoard();

    // Check for a win
    if (checkWin(players[currentPlayer])) {
      console.log(`Player ${players[currentPlayer]} wins!`);
      break;
    }

    // Check for a tie
    if (checkFull()) {
      console.log("It's a tie!");
      break;
    }

    // Switch players
    currentPlayer = (currentPlayer + 1) % 2;
  }

  // Ask the players if they want to play again
  let playAgain = prompt("Play again? (y/n)");
  if (playAgain !== 'y') {
    break;
  }
}
