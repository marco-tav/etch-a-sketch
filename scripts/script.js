let n = 16;
let amount = n**2;

const etchASketch = document.querySelector('.etch-a-sketch');

let i = 0;

while (i < amount) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    etchASketch.appendChild(cell);
    i++;
}