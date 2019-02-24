function solve(array){
    let obj = {};

for(let i = 0;i<array.length;i+=2){
if(!obj.hasOwnProperty(array[i])){
    obj[array[i]] = 0;
}
obj[array[i]] += Number(array[i+1]);
}


    console.log(JSON.stringify(obj))
}

