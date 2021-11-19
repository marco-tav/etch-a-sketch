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
    node.style.background = 'black';
}

function fiestaColors(node) {
    node.style.background = randomHexCode();
}

function grayScale(alpha, node) {
    alpha += 0.1;
    node.style.background = `rgba(0, 0, 0, ${alpha}`;
    return alpha;
}

//------------------------------ EXECUTION --------------------------------------
//-------------------------------------------------------------------------------

createGrid(25);

// Cells change color to black on mouseover.
const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        blackAndWhite(cell);
    })
})

// Clear and resize button
const clearGrid = document.querySelector('#clear-grid');
const modeIndicator = document.querySelector('#mode-indicator');

clearGrid.addEventListener('click', () => {
    const gridSize = prompt('How many cells per side do you want the new grid to have?');
    modeIndicator.textContent = 'Standard Mode';
    
    deleteGrid();
    createGrid(gridSize);

    const newCells = document.querySelectorAll('.cell');

    newCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            blackAndWhite(cell);
        })
    })
})

// Code for mode button from here
const standardModeBtn = document.querySelector('#standard-mode');
const fiestaModeBtn = document.querySelector('#fiesta-mode');
const grayScaleBtn = document.querySelector('#grayscale-mode');

// Standard mode
standardModeBtn.addEventListener('click', () => {
    modeIndicator.textContent = 'Standard Mode';

    const standardCells = document.querySelectorAll('.cell');
    standardCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            blackAndWhite(cell);
        })
    })
})

// Fiesta mode
fiestaModeBtn.addEventListener('click', () => {
    modeIndicator.textContent = 'Fiesta Mode';

    const fiestaCells = document.querySelectorAll('.cell');
    fiestaCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            fiestaColors(cell);
        })
    })
})

// Grayscale mode
grayScaleBtn.addEventListener('click', () => {
    modeIndicator.textContent = 'Grayscale Mode';

    const grayScaleCells = document.querySelectorAll('.cell');
    grayScaleCells.forEach((cell) => {
        let alpha = 0;
        cell.addEventListener('mouseover', () => {
            alpha = grayScale(alpha, cell);
        })
    })
})