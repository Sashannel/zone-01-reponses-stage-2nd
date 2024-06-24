function range(start, end) {
  let array = []
  if (end >= start) {
    for (let i = start; i < end; i++) {
      array.push(i)
      console.log(i)
      console.log(array)
    }
  } else if (end <= start) {
    for (let i = start; i > end; i--) {
      array.push(i)
      console.log(i)
      console.log(array)
    }
  }
  return array
}
