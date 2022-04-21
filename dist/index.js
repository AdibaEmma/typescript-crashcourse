"use strict";
// Basic types
let id = 5;
let company = "Emmanuel";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3,];
let arr = [1, "Hello", true];
// Tuple
let person = [1, "Emma", true];
// Array tuple
let employee = [
    [1, "Emma"],
    [1, "Sam"]
];
// Union
let pid;
pid = 22;
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Right"] = 3] = "Right";
    Direction1[Direction1["Left"] = 4] = "Left";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Right"] = "right";
    Direction2["Left"] = "left";
})(Direction2 || (Direction2 = {}));
let user = {
    id: 1,
    name: 'Emma'
};
// Type Assertions
let cid = 1;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
let user1 = {
    id: 1,
    name: 'Emma'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} has been registered`;
    }
}
const emma = new Person(1, "Emma");
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, "Sam", "software engineer");
// Generics
function getArray(items) {
    return Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(['emma', 'brad', 'peter']);
numArray.push('sam'); //throws and error
stringArray.push(1); //throws and error
