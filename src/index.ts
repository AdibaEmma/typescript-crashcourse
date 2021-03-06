// Basic types
let id: number = 5
let company: string = "Emmanuel"
let isPublished: boolean = true
let x: any = "Hello"
let ids: number[] = [1, 2, 3,]
let arr: any[] = [1, "Hello", true]

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
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

// Void
function log(message: number | string): void {
    console.log(message);
}

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number //optional
}

let user1: UserInterface = {
    id: 1,
    name: 'Emma'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
interface PersonInterface {
    register(): string
}
class Person implements PersonInterface{
    constructor(private _id: number, private readonly _name: string) {
    }
    register(): string {
        return `${this._name} has been registered`;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}

const emma = new Person(1, "Emma")
emma.id = 2
class Employee extends Person {
    private position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, "Sam", "software engineer")

// Generics
function getArray<T>(items: T[]): T[] {
    return Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let stringArray = getArray<string>(['emma','brad','peter'])
numArray.push('sam') //throws and error
stringArray.push(1) //throws and error
