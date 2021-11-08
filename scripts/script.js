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

//------------------------------ EXECUTION --------------------------------------
//-------------------------------------------------------------------------------
let n=16;
createGrid(n);  

// Grid changes color on mouseover
const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {

    cell.addEventListener('mouseover', () => {
        cell.classList.add('drawing');
    })
})

// Clear button
const clearScreen = document.querySelector('.clear-screen');

clearScreen.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.classList.remove('drawing');
    })

    numberOfCells = prompt('How many cells per side do you want?', 25);
    createGrid(numberOfCells);
})