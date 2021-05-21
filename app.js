// VARIABLES

var boardCells = document.querySelectorAll('.grid-cell');

// variables for rows

var rowOne = document.querySelectorAll('.top .grid-cell');
var rowTwo = document.querySelectorAll('.middleY .grid-cell');
var rowThree = document.querySelectorAll('.bottom .grid-cell');
var rows = [rowOne, rowTwo, rowThree];

// variables for columns

var colOne = document.querySelectorAll('.left');
var colTwo = document.querySelectorAll('.middleX')
var colThree = document.querySelectorAll('.right');
var columns = [colOne, colTwo, colThree];

// variables for diagonals

var diagOne = [document.querySelector('.top .left'), document.querySelector('.middleY .middleX'), document.querySelector('.bottom .right')];
var diagTwo = [document.querySelector('.top .right'), document.querySelector('.middleY .middleX'), document.querySelector('.bottom .left')];
var diagThree = [document.querySelector('.top .right'), document.querySelector('.middleY .middleX'), document.querySelector('.bottom .left')];
var diagonals = [diagOne, diagTwo, diagThree];

// variable for all winning cell patterns in the grid

var allWinningLines = [rows, columns, diagonals];

// variables for tic-tac buttons

var ticBtn = document.querySelector('.tic');
var tacBtn = document.querySelector('.tac');

var clickedCell = null;

// variables for tracking the game status

var playerTurn = Math.ceil(Math.random()*2);

// PROCESSING

// event handlers

document.querySelector('.player-turn-text').textContent = `Player ${playerTurn} starts.`;

function alternateTurns (playerTurn) {
    if (playerTurn == 1) {
        return 2;
    }
    else {
        return 1;
    }
}

function handleCell (event) {
    clickedCell = event.target;
    clickedCell.classList.add('clicked');
}

function clearCells () {
    for (var i = 0; i < boardCells.length; i++) {
        boardCells[i].disabled = true;
        boardCells[i].dataset.ticortac = '';
        boardCells[i].dataset.player = '';
    }
}

function handleTic () {
    clickedCell.classList.remove('clicked');
    clickedCell.dataset.player = playerTurn;
    clickedCell.dataset.ticortac = 'tic';
    
    var isDraw = !checkWin() && allCellsFilled();

    if (checkWin()) {
        document.querySelector('.player-turn-text').textContent = `Player ${playerTurn} Won!`;
    }
    else if (isDraw) {
        document.querySelector('.player-turn-text').textContent = `It's a draw!`;
    }
    else {
        playerTurn = alternateTurns(playerTurn);
        document.querySelector('.player-turn-text').textContent = `It's Player ${playerTurn}'s turn!`;
    }
}


function handleTac () {
    clickedCell.classList.remove('clicked');
    clickedCell.dataset.player = playerTurn;
    clickedCell.dataset.ticortac = 'tac';

    var isDraw = !checkWin() && allCellsFilled();

    if (checkWin()) {
        document.querySelector('.player-turn-text').textContent = `Player ${playerTurn} Won!`;
    }
    else if (isDraw) {
        document.querySelector('.player-turn-text').textContent = `It's a draw!`;
    }
    else {
        playerTurn = alternateTurns(playerTurn);
        document.querySelector('.player-turn-text').textContent = `It's Player ${playerTurn}'s turn!`;
    }
}

// Game status checkers

function allCellsFilled () {
    allCellsClicked = true;
    for (var i = 0; i < boardCells.length; i++) {
        if (boardCells[i].dataset.ticortac == '') {
            allCellsClicked = false;
        }
    }
    return allCellsClicked;
}

function checkWin () {
    for (var lineType = 0; lineType < 3; lineType++) {
        for (var lineNum = 0; lineNum < 3; lineNum++) {
            var lineOne = allWinningLines[lineType][lineNum];
            var lineTwo = allWinningLines[lineType][lineNum];
            var lineThree = allWinningLines[lineType][lineNum];

            var cellOne = lineOne[0];
            var cellTwo = lineTwo[1];
            var cellThree = lineThree[2];
            console.log(cellOne.dataset.ticortac);
            if (cellOne.dataset.ticortac == cellTwo.dataset.ticortac && cellTwo.dataset.ticortac == cellThree.dataset.ticortac && cellOne.dataset.ticortac != '') {
                return true;
            }
        }
    }
    return false;
}

// event listeners 


for (var i = 0; i < boardCells.length; i++) {
    boardCells[i].addEventListener('click', handleCell);
}

ticBtn.addEventListener('click', handleTic);
tacBtn.addEventListener('click', handleTac);