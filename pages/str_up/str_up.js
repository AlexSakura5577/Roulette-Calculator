
import { payoutRatios } from "../main/app.js";
localStorage.setItem('payoutRatios', JSON.stringify(payoutRatios));
console.log(JSON.parse(localStorage.getItem('payoutRatios')));

// функция реагирования на изменения в localStorage:
window.onstorage = () => {
    console.log(event);
};

console.log(+localStorage.getItem('number'));
console.log(+localStorage.getItem('number2'));

console.log(+sessionStorage.getItem('number'));
console.log(+sessionStorage.getItem('number2'));

function showMessage() {
    alert(`localStorage_1: ${+localStorage.getItem('number')} \nlocalStorage_2: ${+localStorage.getItem('number2')} \nsessionStorage_1: ${+sessionStorage.getItem('number')} \nsessionStorage_2: ${+sessionStorage.getItem('number2')}`);
    return;
};
// showMessage();
