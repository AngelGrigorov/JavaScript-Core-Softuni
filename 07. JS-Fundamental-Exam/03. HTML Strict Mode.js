function solve(input) {
let result = '';
for(let line of input){
    result += line.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,"") + ' ';
}
console.log(result);
}
solve(['<div><p>This</p> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>']
);