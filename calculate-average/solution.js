function find_average(array) {
  let total = array.reduce((acc, num)=> acc += num);
  let average = total/array.length;
  return average;
}