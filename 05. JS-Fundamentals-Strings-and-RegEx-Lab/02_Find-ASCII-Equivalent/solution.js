function solve() {
    let input = document.getElementById("str").value;
    let result = document.getElementById('result');
        let split = input.split(' ').filter(a => a);
        let output = "";
        for (let element of split) {
            if (Number(element)) {
                output += (String.fromCharCode(element));
            }else {
                let charToNum = [];
                for (let i = 0; i < element.length; i++) {
                    charToNum.push(element[i].charCodeAt(0));
                }
                let p = document.createElement('p');
                p.innerHTML = charToNum.join(' ');
                result.appendChild(p);
            }
        }
        let p = document.createElement('p');
        p.innerHTML = output;
        result.appendChild(p);
}