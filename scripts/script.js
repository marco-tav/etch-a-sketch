let n = 16;
let amount = n**2;

const gridCointainer = document.querySelector('grid-container');

for (let i = 0; i < amount; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    gridContainer.appendChild(cell);
}