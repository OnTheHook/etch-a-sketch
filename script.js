
const btn = document.querySelector('#btn')
btn.addEventListener('click', clearCanvas);

const canvas = document.querySelector('.container')
canvas.setAttribute('style', 'display: flex; flex-direction: column');

let arr = [];

for (let row = 0; row < 10; row++) {
    arr[row] = []
    for (let col = 0; col < 11; col++) {
        if (col === 0) {
            arr[row][col] = document.createElement('div');
            arr[row][col].setAttribute('style', 'display: flex; flex: 1');
        } else {
            arr[row][col] = document.createElement('div');
            arr[row][col].setAttribute('style', 'flex: 1; color: blue');
            arr[row][col].addEventListener('mouseenter', changeColorBlack);
            arr[row][0].appendChild(arr[row][col]);
        }
    }
    canvas.appendChild(arr[row][0]);
}

const divs = canvas.querySelectorAll('div')

function changeColorWhite(e) {
    this.style.backgroundColor = 'white';
    e.stopPropagation();
}

function changeColorBlack(e) {
    this.style.backgroundColor = 'black';
    e.stopPropagation();

}
function createCanvas() {
    arr = []
    let size;

    do {
        size = prompt('How large do you want the grid to be? (maximum 100)');
        if (size === null) return;
        size = parseInt(size);
    } while ((size < 1 || size > 100 || isNaN(size)) && size !== null)


    for (let row = 0; row < size; row++) {
        arr[row] = []
        for (let col = 0; col < size + 1; col++) {
            if (col === 0) {
                arr[row][col] = document.createElement('div');
                arr[row][col].setAttribute('style', 'display: flex; flex: 1');
            } else {
                arr[row][col] = document.createElement('div');
                arr[row][col].setAttribute('style', 'flex: 1; color: blue');
                arr[row][col].addEventListener('mouseenter', changeColorBlack);
                arr[row][0].appendChild(arr[row][col]);
            }
        }
        canvas.appendChild(arr[row][0]);

    }
}

function clearCanvas() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
    createCanvas();
}