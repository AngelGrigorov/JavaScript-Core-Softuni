function solve(array, command) {
    let com = command.split(' ');
    if (com[0] === 'hide') {
        let header = array[0].indexOf(com[1]);
        for (let line of array) {
            line.splice(header, 1).filter((x) => x !== "");
            console.log(line.join(' | '));
        }
    } else if (com[0] === 'sort') {
        let header = array[0].indexOf(com[1]);
        console.log(array[0].join(' | '));
        array.splice(0,1).filter((x) => x !== "");
        array.sort((a, b) => a[header].localeCompare(b));
        for (let line of array) {
            console.log(line.join(' | '));
        }
    }else if(com[0] === 'filter'){
        console.log(array[0].join(' | '));
        let col = com[1];
        let row = com[2];
        for(let i = 1;i < array.length;i++){
            if(array[i].includes(row)){
                console.log(array[i].join(' | '));
            }
        }
    }
}
solve([['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']],
    'sort name'
);