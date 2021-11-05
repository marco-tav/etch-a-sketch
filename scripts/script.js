let n = 16;
let amount = n**2;

const etchASketch = document.querySelector('.etch-a-sketch');

for (let i = 0; i < amount; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    etchASketch.appendChild(cell);
}