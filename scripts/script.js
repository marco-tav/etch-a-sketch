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

//------------------------------ EXECUTION --------------------------------------
//-------------------------------------------------------------------------------
createGrid(16);

// Cells change color to black on mouseover.
const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('drawing');
    })
})

// Clear and resize button
const clearGrid = document.querySelector('.clear-grid');

clearGrid.addEventListener('click', () => {
    const gridSize = prompt('How many cells per side do you want the new grid to have?');

    deleteGrid();
    createGrid(gridSize);

    const newCells = document.querySelectorAll('.cell');

    newCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('drawing');
        })
    })
})