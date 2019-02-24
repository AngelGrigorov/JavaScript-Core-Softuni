function solve() {
    let degrees = Number(document.getElementById('num1').value);
    let param = document.getElementById('type').value;
    let result = '';
    let converted = 0;


    if(param.toLowerCase() === "fahrenheit"){
        converted = (((degrees - 32) * 5) / 9) ;
        result = Math.round(converted);

    }else if(param.toLowerCase() === "celsius"){
        converted = (((degrees *9) / 5) +32) ;
        result = Math.round(converted);


    }else{
        result = "Error!";
    }
    document.getElementById('result').textContent = result;
}
