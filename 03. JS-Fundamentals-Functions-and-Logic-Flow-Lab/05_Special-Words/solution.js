function solve() {
    let num1 = Number(document.getElementById('firstNumber').value);
    let num2 = Number(document.getElementById('secondNumber').value);
    let str1 = document.getElementById('firstString').value;
    let str2 = document.getElementById('secondString').value;
    let str3 = document.getElementById('thirdString').value;
  let result = document.getElementById('result');
    for(let i = num1;i <= num2;i++){
      if(i % 3 === 0 && i % 5 === 0){
          let p = document.createElement('p');
          p.innerHTML = `${i} ${str1}-${str2}-${str3}`;
          result.appendChild(p);
      }else if(i % 3 === 0){
          let p = document.createElement('p');
          p.innerHTML = `${i} ${str2}`;
          result.appendChild(p);

      }else if(i % 5 === 0){
          let p = document.createElement('p');

          p.innerHTML = `${i} ${str3}`;
          result.appendChild(p);

      }else{
          let p = document.createElement('p');

          p.innerHTML = `${i}`;
          result.appendChild(p);

      }
  }
}
solve(9, 15, "doggo", "pesho", "test");