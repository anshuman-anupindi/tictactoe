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
var diagonals = [diagOne, diagTwo];

// variable for all winning cell patterns in the grid

var allWinningLines = [rows, columns, diagonals];

// variables for tic-tac buttons

var ticBtn = document.querySelector('.tic');
var tacBtn = document.querySelector('.tac');

var clickedCell = null;

// PROCESSING

// event handlers

function handleCell (event) {
    clickedCell = event.target;
    clickedCell.classList.add('clicked');
}

function handleTic () {
    clickedCell.textContent = 'tic';
    clickedCell.classList.remove('.clicked');
    if (checkWin()) {
        prompt('You won!');
        document.querySelectorAll('.grid-cell').textContent = '';
    }
}

function handleTac () {
    clickedCell.textContent = 'tac';
    clickedCell.classList.remove('.clicked');
    if (checkWin()) {
        prompt('You won!');
        document.querySelectorAll('.grid-cell').textContent = '';
    }
}

// has the game ended?

function checkWin () {
    for (var lineType = 0; lineType < 3; lineType++) {
        for (var lineNum = 0; lineNum < 3; lineNum++) {
            var lineOne = allWinningLines[lineType][lineNum];
            var lineTwo = allWinningLines[lineType][lineNum];
            var lineThree = allWinningLines[lineType][lineNum];

            var cellOne = lineOne[0];
            var cellTwo = lineTwo[1];
            var cellThree = lineThree[2];

            console.log(lineOne);

            if (cellOne.textContent == cellTwo.textContent && cellTwo.textContent == cellThree.textContent) {
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