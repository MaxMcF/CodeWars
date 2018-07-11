function fixTheMeerkat(arr) {
  var indexZero = arr[0];
  var indexTwo = arr[2];
  arr[0] = indexTwo;
  arr[2] = indexZero;
  return arr;
}
