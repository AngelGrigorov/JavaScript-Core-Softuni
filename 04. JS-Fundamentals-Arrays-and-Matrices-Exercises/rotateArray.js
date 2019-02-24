function solve(array){
    let rotations = array[array.length-1];
    array.pop();
    for(let i = 1; i <= (+rotations % array.length);i++){
       let last = array[array.length-1];
        array.pop();
        array.unshift(last);
    }
    console.log(array.join(' '));
}
