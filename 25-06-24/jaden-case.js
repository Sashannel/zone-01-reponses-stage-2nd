function toJadenCase(sentence) {
return sentence
.split(' ') // Split the sentence into words
.map(word => // Map over each word
word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize first letter, lower the rest
)
.join(' '); // Join the words back into a sentence
}
