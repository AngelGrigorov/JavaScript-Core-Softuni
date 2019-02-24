function solve() {
    let count = 0;
    let string = document.getElementById("string").value;
    let char = document.getElementById("character").value;
    let result = document.getElementById('result');
  for(let i = 0; i< string.length;i++){
      if(string[i] === char){
          count++;
      }
  }

  if(count % 2 === 0){
      result = `Count of ${char} is even.`;
  }else{
      result = `Count of ${char} is odd.`;
  }
    document.getElementById('result').textContent = result;
}
solve('Is this real life?', 'f');