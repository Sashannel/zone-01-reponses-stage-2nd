function namePlz(array) {
return array.map(obj => obj.name).join(', ');
}

// Example usage:
const people = [
{ name: "Alice" },
{ name: "Bob" },
{ name: "Charlie" }
];
