const first = require('./ex01');
const initial = require('./ex02');
const last = require('./ex03');
const rest = require('./ex04');
const flatten = require('./ex05');

function indexedLog(index, func) {
    console.log(index + ' => ' + func);
}

indexedLog(1, first([1, 2, 3, 4, 5]));
// => 1

indexedLog(2, initial([1, 2, 3, 4, 5], 2));
// => [1,2,3]

indexedLog(3, last([1, 2, 3, 4, 5], 2));
// => [4,5]

indexedLog(4, rest([1, 2, 3, 4, 5], 2));
// => [3,4,5]

indexedLog(4, flatten([1, 2, 3, 4, 5], 2));
// => [3,4,5]