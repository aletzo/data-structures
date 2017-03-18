// First In First Out
let queue = [];

queue.push('a');
queue.push('b');
queue.push('c');
queue.push('d');
queue.push('e');

console.log(queue.shift()); // a
console.log(queue.shift()); // b
console.log(queue.shift()); // c
console.log(queue.shift()); // d
console.log(queue.shift()); // e

