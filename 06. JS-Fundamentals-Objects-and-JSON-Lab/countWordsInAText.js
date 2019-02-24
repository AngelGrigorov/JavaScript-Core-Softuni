function solve([array]){
   let obj = {};
   let regex = /\W+/;
   let words = array.split(regex).filter(x => x !== '');
    for(let i = 0;i<words.length;i++){
        if(!obj.hasOwnProperty(words[i])){
            obj[words[i]] = 1;
        }else{
            obj[words[i]]++;
        }

    }
    console.log(JSON.stringify(obj));
}
solve('Far too slow, you\'re far too slow.');