function fruit(name, weight, price){
    let weightKilos = weight / 1000;
    let needMoney = weightKilos * price;
    console.log(`I need ${needMoney.toFixed(2)} leva to buy ${weightKilos.toFixed(2)} kilograms ${name}.`);
}