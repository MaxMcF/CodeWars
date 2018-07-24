function cubeOdd(arr) {
  let newArr = arr.map(x => Math.pow(x, 3));
  let newerArray = newArr.filter(x => x % 2 !== 0);
  if(newerArray.length < 1){
    return 0;}
    else{
    let newestArr = newerArray.reduce((accum, count) => accum += count);
    if(newestArr || newestArr === 0){
      return newestArr;}
    else{return undefined}
  }
}