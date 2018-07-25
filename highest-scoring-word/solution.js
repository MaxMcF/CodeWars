function high(x){
  let words = x.split(" ");
  let charArray = words.map(x => x.split(""));
  let numArray = charArray.map(x => x.reduce((accumulator, count) => accumulator += (count.charCodeAt(0) - 96), 0))
  function getMax(theArray) {
    return Math.max.apply(null, theArray);
  }
  let maxIndex = numArray.indexOf(getMax(numArray))
  return words[maxIndex];
  }