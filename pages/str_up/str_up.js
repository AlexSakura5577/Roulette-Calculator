
console.log(+localStorage.getItem('number'));
console.log(+localStorage.getItem('number2'));

console.log(+sessionStorage.getItem('number'));
console.log(+sessionStorage.getItem('number2'));


function showMessage() {
    alert(`localStorage_1: ${+localStorage.getItem('number')} \nlocalStorage_2: ${+localStorage.getItem('number2')} \nsessionStorage_1: ${+sessionStorage.getItem('number')} \nsessionStorage_2: ${+sessionStorage.getItem('number2')}`);
    return;
};
showMessage();
