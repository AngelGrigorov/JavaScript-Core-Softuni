function solve() {
  let result = '';
  let string = document.getElementById('string').value;
  for(let i = 0;i < string.length;i++){
      if(string[i] === ' '){
          result += string[i];
      }else{
          if(result.includes(string[i])){
              result += '';
          }else{
              result += string[i];
          }
      }
  }
  document.getElementById('result').textContent = result;
}
solve('This is a random Sentence');