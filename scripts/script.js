//--------------------------- FUNCTION DECLARATIONS -----------------------------
//-------------------------------------------------------------------------------

// Here may go grid creation function

function deleteGrid() {
    const gridContainer = document.querySelector('.grid-container');
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        gridContainer.removeChild(cell);
    })
}
//------------------------------ EXECUTION --------------------------------------
//-------------------------------------------------------------------------------

const gridContainer = document.querySelector('.grid-container');

let cellsPerSide = 50;

for (let i = 0; i < cellsPerSide; i++) {
    const cellContainer = document.createElement('div');
    cellContainer.setAttribute('class', 'cell-container');
    gridContainer.appendChild(cellContainer);
}

