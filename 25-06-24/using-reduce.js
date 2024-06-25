function adder(arr, initial = 0) {
return arr.reduce((acc, x) => acc + x, initial);
}

function sumOrMul(arr, initial = 0) {
return arr.reduce((acc, x) => x % 2 === 0 ? acc * x : acc + x, initial);
}

function funcExec(funcs, initial) {
if (initial !== undefined) {
return funcs.reduce((acc, func) => func(acc), initial);
} else {
return funcs.reduce((acc, func) => func(acc));
}
}

console.log(adder([1, 2, 3, 4], 5));
console.log(sumOrMul([1, 2, 3, 5, 8], 5));
console.log(funcExec([x => x + 1, x => x * 2], 5));
