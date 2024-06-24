function from10(end) {
  if (end < 10) {
    for (let i = 10; i >= end; i--) {
      console.log(i)
    }
  } else {
    for (let i = 10; i <= end; i++) {
      console.log(i)
    }
  }
}
