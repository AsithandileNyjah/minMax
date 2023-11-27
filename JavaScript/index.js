let display1 = document.querySelector('[display1]');
let display2 = document.querySelector('[display2]');
let btn = document.querySelector('[show]');

btn.addEventListener('click', display);

function display() {
    let myArray = document.querySelector('[input]').value.split(' ');

    if (myArray.length > 0) {
        let min = Math.min(...myArray);
        let max = Math.max(...myArray);
        console.log(min);
        console.log(max);
        display1.value = min;
        display2.value = max;
    } else {
        console.log("The array is empty");
        display1.value = "";
        display2.value = "";
    }
}