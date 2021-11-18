//--------------------------- FUNCTION DECLARATIONS -----------------------------
//-------------------------------------------------------------------------------
function createGrid(cellsPerSide) {
    const gridContainer = document.querySelector('.grid-container');

    // Create a column of divs that span the width of the container.
    for (let i = 0; i < cellsPerSide; i++) {
        const cellContainer = document.createElement('div');
        cellContainer.setAttribute('class', 'cell-container');
        gridContainer.appendChild(cellContainer);
    }

    const rowContainers = document.querySelectorAll('.cell-container');

    // Fill each of those divs with cells.
    rowContainers.forEach((rowContainer) => {
        for (let j = 0; j < cellsPerSide; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            rowContainer.appendChild(cell);
        }
    })

}

function deleteGrid() {
    const gridContainer = document.querySelector('.grid-container');
    const cellContainers = document.querySelectorAll('.cell-container');

    cellContainers.forEach((cellContainer) => {
        gridContainer.removeChild(cellContainer);
    })
}

function randomArrayIndex() { // Generates a random array index from 0 to 15.
    let randomNumber = Math.floor(Math.random()*16);
    
    return randomNumber;
}

function randomHexCode() {
    const hexDigitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    let randomIndex;
    let randomHex = '#';

    for (let i = 0; i < 6; i++) {
        randomIndex = randomArrayIndex();
        randomHexDigit = hexDigitArray[randomIndex];
        randomHex += randomHexDigit;
    }

    return randomHex;
}

function blackAndWhite(node) {
    node.classList.add('drawing');
}

function fiestaColors(node) {
    node.style.background = randomHexCode();
}

//------------------------------ EXECUTION --------------------------------------
//-------------------------------------------------------------------------------

createGrid(25);

// Cells change color to black on mouseover.
const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        fiestaColors(cell);
    })
})

// Clear and resize button
const clearGrid = document.querySelector('#clear-grid');

clearGrid.addEventListener('click', () => {
    const gridSize = prompt('How many cells per side do you want the new grid to have?');

    deleteGrid();
    createGrid(gridSize);

    const newCells = document.querySelectorAll('.cell');

    newCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            fiestaColors(cell);
        })
    })
})