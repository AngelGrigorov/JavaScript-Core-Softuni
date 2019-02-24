function solve() {
    let string = document.getElementById('str').value;
    let resultElement = document.getElementById('result');
   //finding string weight
    let stringWeight = 0;
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum += Number(string[i]);
        }
         stringWeight = sum;
 //------------------------
    let parts = stringWeight % 9 || 9;
    let finalString = string.substr(parts).slice(0, -parts);
    let binaries = chunkString(finalString, 8);
    let result = '';
    binaries.forEach((value) => {
        let ascii = parseInt(value, 2);
        let pattern = /^[a-zA-Z\s]*$/;
        if (pattern.test(String.fromCharCode(ascii))) {
            result += String.fromCharCode(ascii);
        }
    });
    resultElement.innerHTML = result;
    function chunkString(str, length) {
        return str.match(new RegExp('.{1,' + length + '}', 'g'));
    }
}