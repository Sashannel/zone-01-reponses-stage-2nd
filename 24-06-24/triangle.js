function triangle(str, number) {
  let result = ''
  for (let i = 0; i <= number; i++) {
    result += str.repeat(i) + '\n'
  }

  return result.trim()
}
