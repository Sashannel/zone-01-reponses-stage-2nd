const arg = process.argv[2];

/*
function disco(word) {
  let mid = Math.ceil(word.length / 2)
  let first = word.slice(0, mid)
  let second = word.slice(mid)
}

*/

let result = []
for (let i = 0; i < arg.split(' ').length; i++) {
  let words = arg.split(' ')
  let word = words[i]
  let mid = Math.ceil(word.length / 2)
  let firstHalf = word.slice(0, mid)
  let lastHalf = word.slice(mid)
  let reversedWord = lastHalf + firstHalf
  result.push(reversedWord)
}
if (arg.split('') !== 0) {
  console.log(result.toString().replace(/,/g, ' '))
} else {
  console.log(result.toString())
}
