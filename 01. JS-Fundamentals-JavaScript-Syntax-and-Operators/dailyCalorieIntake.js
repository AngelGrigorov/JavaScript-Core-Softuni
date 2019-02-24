function solve(arr, factor) {

    let [sex, weight, height, age] = arr;
    let calories = 0;
    let a = 0;
    let result;
    if(sex === "m"){
        calories += (66 + (13.8 * weight) + (5 * height) - (6.8 * age));

    }else{
        calories += (655 + (9.7 * weight) + (1.85 * height) - (4.7 * age));
    }

    if(factor < 1){
        a = 1.2;
    }else if(factor >= 1 && factor < 3){
        a= 1.375;
    }else if(factor >= 3 && factor < 6){
        a= 1.55;
    }else if(factor  >= 6 && factor <= 7){
        a= 1.725;
    }else if(factor > 7){
        a= 1.90;
    }
result = Math.round(calories * a);
    console.log(result);
}
solve(['f', 46, 157, 32], 5);