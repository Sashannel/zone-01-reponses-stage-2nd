function toSquares(data) {
  let result = []
  for (let i = 0; i < data.length; i++) {
    result.push(data[i] ** 2)
  }
  return result
}
