//--------------------------- FUNCTION DECLARATIONS -----------------------------
//-------------------------------------------------------------------------------

function createGrid(cellsPerSide) {
    const gridContainer = document.querySelector('.grid-container');

    // Create a column of divs. Inside of each div will go a row of cells. 
    for (let i = 0; i < cellsPerSide; i++) {
        const cellContainer = document.createElement('div');
        cellContainer.setAttribute('class', 'cell-container');
        gridContainer.appendChild(cellContainer);
    }

    const rowContainers = document.querySelectorAll('.cell-container');

    // Create a row of cells inside each div. This makes up the grid.
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
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        gridContainer.removeChild(cell);
    })
}
//------------------------------ EXECUTION --------------------------------------
//-------------------------------------------------------------------------------



