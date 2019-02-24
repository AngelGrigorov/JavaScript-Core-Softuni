function solve() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
let button = document.querySelector('#exercise button');
button.addEventListener('click', extract);
function extract(){
    let number =  (/[0-9]+/.exec(input.value))[0];
    let substring = input.value.slice(number.length,(+number + number.length));
let delimiter = substring.slice(-1);
let [pattern, string] = substring.split(delimiter).filter((x) => x !== '');
string = string.replace(new RegExp(`[${pattern}]`, 'g'), '');
string = string.replace(/[#]/g, " ");
output.value = string;
}
}