# tictactoe


General Game Outline - JavaScript:

1. The game first randomly generates a player (1 or 2) that starts (var playerTurn).
2. The player then clicks a cell on the grid, which adds 'clicked' to the classList of that cell object, done with the handleCell() function.
3. The same player then clicks the orange or white tic-tac button and adds 'tic' or 'tac' to the classList of the last clicked cell - this is done with the handleTic()
and handleTac() functions.
4. In the handleTic/Tac() functions, playerTurn is reassigned to the function alternateTurns(playerTurn), which alternates between 1 and 2 - This begins the next
player's turn.
5. Also in the handleTic/Tac() functions are checkWin() and isDraw conditions, which can be understood as follows:
In a 3x3 grid, there are 8 possible winning scenarios:
- A column, row, or diagonal is filled with cell objects with the same 'tic' or 'tac' class
- There are 3 columns, 3 rows, and 2 diagonals to check, which makes 8 arrays to iterate through.
6. Once a player has won, the HTML element for the player's turn changes to whoever won, and doesn't change from that point.

Challenges in JS:
- Instead of making a single concatenated array of all length-3 winning arrays, I put them in 3 levels of nested arrays, which made checkWin() a nested for-loop,
using unnecessary complexity
- Didn't integrate a 'play again' feature
- There are 3 columns and rows, but only 2 diagonals, so this further hints at a better control structure with a single concatenated array instead of a nested one.
To work around this, I had to duplicate the second diagonal so diagonals, columns, and rows all had the same length that would work in a nested for-loop.
- Many redundancies and artefacts from older, or unfinished approaches at class toggling, etc.
- I wanted to activate an eventListener in the eventListener function for when you click on a cell, so that a player's turn's actions would be nicely organised. 
I didn't know how to make this work, so I ended up using external variables and functions, which adds further unnecessary complexity and redundancy.
- Attempts at resetting the game after a player has won became tedious after I realised I needed a time-delay after a player has won to clear all data and start
the game again.

Challenges in CSS:
- Wanted to change the last clicked cell to a permanently 'pushed' button, so that the player wouldn't have to remember which cell they clicked before they
clicked the orange or white tic-tac. I didn't know the CSS rules, or get the time, for this.
- Wanted a time-out before all visual history of the previous game disappears.



Timeline:
1. Writing the basic HTML Markup, with a 3-grid column for Player turn information, the game board, and the 'tic' and 'tac' buttons, respectively.
2. Ditching the scoreboard on the first column, and making the 3x3 grid in the second column of <body></body>
3. Getting the buttons, grid objects, and player turn spans as document objects in JS, and initialising a random starting player
4. Adding functionality for alternating turns
5. Writing event handlers for player turns
6. Writing the checkWin() function that iterates through winning patterns on each turn, displaying the win status on the first column of the 'body' tag
7. Writing the draw condition
8. Adding hover and active animations for the buttons and grid cells
9. Adding orange and white tic tacs to the background images of the buttons
10. Choosing a color palette, and adding a suitable font family
11. Adding extra animations to buttons and cell objects, e.g. 'shake' on Tic-Tac buttons, and depth for the cell buttons
12. Adding 'glow' effect to the game title span in the first column of body, from keyframes






