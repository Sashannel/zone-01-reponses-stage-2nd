function childrenOnly(array) {

  let result = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 18) {
      result.push(array[i])
    }
  }
  return result
}                                                                                 
