//--------------------------- FUNCTION DECLARATIONS -----------------------------
//-------------------------------------------------------------------------------

function createGrid(n) {
    let cellAmount = n**2;
    cellHeight = `${900/n}px`;
    cellWidth = `${900/n}px`;

    const gridContainer = document.querySelector('.grid-container');      

    for (let i = 0; i < cellAmount; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.style.width = cellWidth;
        cell.style.height = cellHeight;
        gridContainer.appendChild(cell);
    }
}

function deleteGrid() {
    const gridContainer = document.querySelector('.grid-container');
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        gridContainer.removeChild(cell);
    })
}

//------------------------------ EXECUTION --------------------------------------
//-------------------------------------------------------------------------------
let n=16;
createGrid(n);  
const cells = document.querySelectorAll('.cell');

// Grid changes color on mouseover
cells.forEach((cell) => {

    cell.addEventListener('mouseover', () => {
        cell.classList.add('drawing');
    })
})

// Clear grid button
const clearGrid = document.querySelector('.clear-grid');

clearGrid.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.classList.remove('drawing');
    })
})

// Resize grid button
const resizeGrid = document.querySelector('.resize-grid');

resizeGrid.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.classList.remove('drawing');
    })

    numberOfCells = prompt('How many cells per side do you want?', 25);
    deleteGrid();
    createGrid(numberOfCells);

    // Create new reference to the cells. Attach event lisetener for color change.
    const newCells = document.querySelectorAll('.cell');

    newCells.forEach((newCell) => {

        newCell.addEventListener('mouseover', () => {
            newCell.classList.add('drawing');
        })
    })
})
