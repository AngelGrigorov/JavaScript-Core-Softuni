function solve(input) {
    let obj = {};
    let numberOfVignettes = [];
    let highestProfit = 0;
    let highestTown;
    let mostDrivenModel = '';
    let biggestVignettePrice = [];
    let townNumbers = [];
    let modelCount = [];

    input.forEach((element) => {
        let town = element.town;
        let regNumber = element.regNumber;
        let model = element.model;
        let price = element.price;
        townNumbers[town] = [];
        if (!obj[town]) {
            obj[town] = {
                model: element.model,
                price: element.price,
                regNumber: element.regNumber
            }
            numberOfVignettes[town] = 1;
            modelCount[town] = 1;
            townNumbers[town] = regNumber;
            if (obj[town].price > highestProfit) {
                highestProfit = obj[town].price;
                highestTown = town;
                biggestVignettePrice[model] = obj[town].price;
            } else if (obj[town].price === highestProfit) {
                if (numberOfVignettes[town] > numberOfVignettes[highestTown]) {
                    highestProfit = obj[town].price;
                    highestTown = town;
                } else if (numberOfVignettes[town] === numberOfVignettes[highestTown]) {
                    if (town.charCodeAt(0) < highestTown.charCodeAt(0)) {
                        highestProfit = obj[town].price;
                        highestTown = town;
                    }
                }
            }
        } else {
            obj[town].price += element.price;
            numberOfVignettes[town]++;
            modelCount[town]++;
            townNumbers[town].push(regNumber);
            if (obj[town].price > highestProfit) {
                highestProfit = obj[town].price;
                highestTown = town;
            }
        }
        if(element.town === highestTown && mostDrivenModel === ""){
            mostDrivenModel = element.model;
        }else if(element.town === highestTown && mostDrivenModel !== ""){
            if(biggestVignettePrice[mostDrivenModel] < biggestVignettePrice[element.model]){
                mostDrivenModel = element.model;
            }else if(biggestVignettePrice[mostDrivenModel] === biggestVignettePrice[element.model]){
                if (element.model.charCodeAt(0) < mostDrivenModel.charCodeAt(0)) {
                    mostDrivenModel = element.model;
                }
            }
        }
});
    console.log(`${highestTown} is most profitable - ${highestProfit} BGN`);
console.log(`Most driven model: ${mostDrivenModel}`);
input.forEach((element) => {
   if(element.model === mostDrivenModel){
       // input.sort((a, b) => a[header].localeCompare(b[header]));
       console.log(`${element.town}: ${townNumbers[element.town]}`);
          }
});
}

solve([{model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    {model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    {model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    {model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    {model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3}]
);