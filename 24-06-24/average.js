function average(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  let a = sum /  array.length
  return a
}
