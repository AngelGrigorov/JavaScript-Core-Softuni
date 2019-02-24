function solve() {
    let number = document.getElementById('num').value;
    let array = JSON.parse(document.getElementById('arr').value);
    let result = document.getElementById('result');
    let newArray = [];
    for(let element of array){
        let resultBoolean = element.includes(number);
        let index = element.indexOf(number);
        newArray.push(resultBoolean + ' -> ' + index);
    }
    result.innerHTML = newArray.join(' ');
}