function mutateMyStrings(stringOne, stringTwo){
  let ArrayOne = stringOne.split("");
  let ArrayTwo = stringTwo.split("");
  let finalArray = [];
  console.log(ArrayOne);
  finalArray.push(ArrayOne.join(""));
  ArrayOne.forEach(function (element, index){
    if(ArrayOne[index] === ArrayTwo[index]){
      index++;
    }else{
      ArrayOne.splice(index, 1, ArrayTwo[index]);
      console.log(ArrayOne.join(""));
      finalArray.push(ArrayOne.join(""));
  }})
  return (finalArray.join("\n") + "\n")
 
}