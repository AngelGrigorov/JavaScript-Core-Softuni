function solve() {
    let arr = JSON.parse(document.getElementById('arr').value);
    let result = document.getElementById('result');
    arr.sort((a, b) => a - b);
    let div = document.createElement('div');
    let div2 = document.createElement('div');

    div.textContent = arr.join(", ");
    result.appendChild(div);
    let tempArr = arr.sort((a, b) => a.localeCompare(b));
    div2.textContent = tempArr.join(', ');
    result.appendChild(div2);

}