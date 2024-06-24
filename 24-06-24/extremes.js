//atteint le test 6

function extreme(array) {
  let min = Number.MAX_VALUE;
  let max = -Number.MAX_VALUE;
  for (let i = 0; i < array.length; i++) {
    console.log(i)
    console.log(min)
    console.log(max)
    if (array[i] > max) {
      max = array[i]
    }
    if (array[i] < min) {
      min = array[i]
    }
  }
  let result = {
    bigest: max,
    smallest: min
  }
  return result
}
