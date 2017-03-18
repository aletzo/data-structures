// First In Last Out
let stack = [];

stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');
stack.push('e');

console.log(stack.pop()); // e
console.log(stack.pop()); // d
console.log(stack.pop()); // c
console.log(stack.pop()); // b
console.log(stack.pop()); // a
