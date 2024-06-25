function jsFileOnly(data) {
  let result = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].endsWith('.js')) {
      result.push(data[i])
    }
  }
  return result
}
