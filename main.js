const first = require('./ex01');
const initial = require('./ex02');
const last = require('./ex03');
const rest = require('./ex04');
const flatten = require('./ex05');
const without = require('./ex06');
const union = require('./ex07');
const intersection = require('./ex08');
const difference = require('./ex09');
const indexOf = require('./ex10');
const lastIndexOf = require('./ex11');
const keys = require('./ex12');
const values = require('./ex13');
const paires = require('./ex14');
const invert = require('./ex15');
const pick = require('./ex16');
const omit = require('./ex17');
const has = require('./ex18');
const size = require('./ex19');
const sample = require('./ex20');

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

indexedLog(8, intersection([2, 6, 8, 10], [1, 2, 4, 8], [2, 4, 6, 8]));
// => [2,8]

indexedLog(9, difference([2, 6, 8, 10], [1, 2, 4, 8], [2, 4, 6, 8]));
// => [6, 10]

indexedLog(10, indexOf([2, 6, 8, 10, 8], 8));
// => 3

indexedLog(11, lastIndexOf([2, 6, 8, 10, 8], 8));
// => 5

//OBJETCS//////////////////////

indexedLog(12, keys({
    one: 1,
    two: 2,
    three: 3,
}));
// => ['one', 'two', 'three]

indexedLog(13, values({
    one: 1,
    two: 2,
    three: 3,
}));
// => [1, 2, 3]

indexedLog(14, paires({
    one: 1,
    two: 2,
    three: 3,
}));
// => [['one', 1], ['two', 2], ['three', 3]]

indexedLog(15, invert({
    one: 1,
    two: 2,
    three: 3,
}));
// => ({'1': 'one'}, {'2': 'two}, {'3': 'three'})

indexedLog(16, pick({
    name: 'jean',
    age: 35,
    userid: 'jean35',
}, 'name', 'age'));
// => {name: 'jean', age: 35}
indexedLog(16, pick({
    name: 'jean',
    age: 35,
    userid: 'jean35',
}, function(value, key, object) {
    return Number.isInteger(value);
}));
// => {age: 35}

indexedLog(17, omit({
    name: 'jean',
    age: 35,
    userid: 'jean35',
}, 'name', 'age'));
// => {userid: 'jean35'}
indexedLog(17, omit({
    name: 'jean',
    age: 35,
    userid: 'jean35',
}, function(value, key) {
    return Number.isInteger(value);
}));
// => {name: 'jean', userid: jean35}

indexedLog(18, has({
    one: 1,
    two: 2,
    three: 3,
}, 'one'));
// => true

indexedLog(19, size([1, 2, 3, 4, 5]));
// => 5
indexedLog(19, size({
    one: 1,
    two: 2,
    three: 3,
}));
// => 3

indexedLog(20, sample([1, 2, 3, 4, 5]));
// => ?
indexedLog(20, sample([1, 2, 3, 4, 5], 3));
// => [?,?,?]

