function capitalize(s,arr){ 
  let wordArray = s.split('');
  arr.map(function(element, index){
    if(wordArray.length >= element){
    wordArray[element] = wordArray[element].toUpperCase();
    }})
  return wordArray.join('');

};