function slice (input,start,end){
if (typeof input !== 'string' && !Array.isArray(input)) {
throw new TypeError("The input must be a string or an array.");
}

// If end is undefined, set it to the length of the input
if (end === undefined) {
end = input.length;
}

// Convert negative indices to positive indices relative to the length of the input
if (start < 0) {
start = input.length + start;
}
if (end < 0) {
end = input.length + end;
}

// Ensure indices are within bounds
start = Math.max(0, start);
end = Math.min(input.length, end);

// Initialize result array
let result = [];

// Handle string input
if (typeof input === 'string') {
for (let i = start; i < end; i++) {
result.push(input[i]);
}
return result.join('');
}

// Handle array input
for (let i = start; i < end; i++) {
result.push(input[i]);
}

return result;
}
