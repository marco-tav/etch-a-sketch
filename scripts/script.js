// Grid creation
let n = 16;
let amount = n**2;

const gridContainer = document.querySelector('.grid-container');      

for (let i = 0; i < amount; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    gridContainer.appendChild(cell);
}

// Grid changes color on mouseover
const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {

    cell.addEventListener('mouseover', () => {
        cell.classList.add('drawing');
    })
})

// Clear function 
const clearScreen = document.querySelector('.clear-screen');

clearScreen.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.classList.remove('drawing');
    })
})