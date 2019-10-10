const first = require('./ex01');
const initial = require('./ex02');
const last = require('./ex03');
const rest = require('./ex04');
const flatten = require('./ex05');
const without = require('./ex06');
const union = require('./ex07');
const Intersection = require('./ex08');

function indexedLog(index, func) {
    console.log(index + ' =>', func); //+ => concat , => save type of value
}

indexedLog(1, first([1, 2, 3, 4, 5]));
// => 1

indexedLog(2, initial([1, 2, 3, 4, 5], 2));
// => [1,2,3]

indexedLog(3, last([1, 2, 3, 4, 5], 2));
// => [4,5]

indexedLog(4, rest([1, 2, 3, 4, 5], 2));
// => [3,4,5]

indexedLog(5, flatten([1, [2, [3, [4]]]]));
// => [1,2,3,4]
indexedLog(5, flatten([1, [2, [3, [4]]]], true));
// => [1,2,3,[[4]]]

indexedLog(6, without([1, 2, 3, 4, 5], 2, 5));
// => [1,3,4]

indexedLog(7, union([1, 2, 3, 4, 5], [6, 7], [8, 9, 10]));
// => [1,2,3,4,5,6,7,8,9,10]

indexedLog(8, Intersection([1, 2, 3, 4, 5], [1, 2, 6], [2, 4, 6]));
// => [2]