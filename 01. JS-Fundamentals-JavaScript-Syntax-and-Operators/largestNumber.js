
function solve(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        console.log(`The largest number is ${n1}.`)
    }else if(n2 > n1 && n2 > n3){
        console.log(`The largest number is ${n2}.`)

    }else{
        console.log(`The largest number is ${n3}.`)

    }
}
