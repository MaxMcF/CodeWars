function solution(str){
  let splitArray = str.split('');
  let reverseArray = splitArray.reverse();
  let joinArray = reverseArray.join('');
  return joinArray;
}