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
