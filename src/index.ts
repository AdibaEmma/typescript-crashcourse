// Basic types
let id: number = 5
let company: string = "Emmanuel"
let isPublished: boolean = true

let x: any = "Hello"

let ids: number[] = [1,2,3,]
let arr:any[] = [1, "Hello", true]

// Tuple
let person: [number, string, boolean] = [1, "Emma", true]

// Array tuple
let employee: [number, string][] = [
    [1, "Emma"],
    [1, "Sam"]
]

// Union
let pid: number | string
pid = 22

// Enums
enum Direction1 {
    Up = 1,
    Down,
    Right,
    Left
}

enum Direction2 {
    Up = "up",
    Down = "down",
    Right = "right",
    Left = "left"
}

// Objects
type User = {
    id: number,
    name: string
}

let user: User = {
    id: 1,
    name: 'Emma'
}

// Type Assertions
let cid: any = 1
let customerId =  cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

// Void
function log(message: number | string): void {
    console.log(message);
    
}