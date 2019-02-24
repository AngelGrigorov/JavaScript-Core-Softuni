function solve(arr) {
    let totalMoney = 0;
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(', ');
        let price = 0;
        let milkPrice = 0;
        let coinsInserted = +tokens[0];
        let typeOfDrink = tokens[1];
        if (typeOfDrink === 'coffee') {
            if (tokens[2] === 'caffeine') {
                price = 0.8;
            } else if (tokens[2] === 'decaf') {
                price = 0.9;

            }
        } else if (typeOfDrink === 'tea') {
            price = 0.8;
        }
        if(tokens.includes("milk")){
 milkPrice = (Math.round(price) * 0.1);
price += milkPrice;
        }
        let sugar = tokens[tokens.length -1];
        if(sugar > 0 && sugar < 6){
            price += 0.1;
        }
        if(coinsInserted >= price){
            let change = coinsInserted - price;
            console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            totalMoney += price;
        }else{
            console.log(`Not enough money for ${typeOfDrink}. Need ${(price - coinsInserted).toFixed(2)}$ more.`);
        }
    }
    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);
}
solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
);