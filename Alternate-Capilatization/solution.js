function capitalize(s){
  
  let letterArray = Array.from(s);
  let letterArrayOdd = letterArray;
  let evenArray = [];
  let oddArray = [];
    for(let i = 0; i < letterArray.length; i++){
      let nextIndex = i + 1;
      if (letterArray[nextIndex] !== 0){
      var currentEven = letterArray[i].toUpperCase();
      }
      evenArray.push(currentEven);
      evenArray.push(letterArray[nextIndex]);
      i++
      }
    for(let t = 0; t < letterArrayOdd.length; t++){
      let currentIndex = t + 1;
      if (letterArrayOdd[currentIndex] !== undefined){
      var currentOdd = letterArrayOdd[currentIndex].toUpperCase();
      console.log(currentOdd);}
      else{
      oddArray.push(letterArrayOdd[t]);
      break;}
      oddArray.push(letterArrayOdd[t]);
      oddArray.push(currentOdd);
      t++;
      }
  let completedEvenArray = evenArray.join('');
  let completedOddArray = oddArray.join('');
  let completeArray = [];
  completeArray.push(completedEvenArray);
  completeArray.push(completedOddArray);
  return completeArray;
};