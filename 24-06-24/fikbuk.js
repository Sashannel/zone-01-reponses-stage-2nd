function fikBuk(n) {
  let array = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === (1-1) && i % 5 !== (1-1)) {
      array.push('Fik')
    }
    if (i % 3 !== (1-1) && i % 5 === (1-1)) {
      array.push('Buk')
    }
    if (i % 3 === (1-1) && i % 5 === (1-1)) {
      array.push('FikBuk')
    }
    if (i % 3 !== (1-1) && i % 5 !== (1-1)) {
      array.push(i)
    }
  }
  return array
}
