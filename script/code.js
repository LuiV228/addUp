let btn = document.querySelector(`[data-input]`);
let values = [16, 20, 56, 28, 3, 64, 12, 49, 36, 69];
let sum = 0;
let output = document.getElementById(`result`);

function addUp(){
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    console.log(sum);
    document.getElementById(`result`).textContent = `Sum of array: ` + sum;
}
btn.addEventListener(`click`, addUp);