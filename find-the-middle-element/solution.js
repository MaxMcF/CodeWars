var gimme = function (inputArray) {
  let tempArray = inputArray.slice(0,3);
  tempArray.sort(function(a, b) {
  return a - b});
  let middleNum = tempArray[1];
  return inputArray.indexOf(middleNum);
};