const canvas = document.querySelector('.container')
canvas.setAttribute('style', 'display: flex; flex-direction: column');
let arr = [];

for (let row = 0; row < 10; row++) {
    arr[row] = []
    for (let col = 0; col < 11; col++) {
        if (col === 0) {
            arr[row][col] = document.createElement('div');
            arr[row][col].setAttribute('style', 'display: flex; flex: 1');
        } else{
        arr[row][col] = document.createElement('div');
        arr[row][col].textContent = '?';
        arr[row][col].setAttribute('style', 'flex: 1; color: blue');
        arr[row][col].addEventListener('mouseenter', changeColorBlack);
        // arr[row][col].addEventListener('mouseleave', changeColorWhite);
        arr[row][0].appendChild(arr[row][col]);
        }
    }
    canvas.appendChild(arr[row][0]);
}

function changeColorWhite(e) {
    this.style.backgroundColor = 'white';
    e.stopPropagation();
}

function changeColorBlack(e) {
    this.style.backgroundColor = 'black';
    e.stopPropagation();

}