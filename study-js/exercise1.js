// Object-based
let o1 = { // object syntax
    x: 0, // attribute
    y: 0,
    radius: 100,
    area: function () { // method
        return Math.PI * this.radius * this.radius;
    }
}
console.table(o1)
console.log(o1.area())
// alternative syntax -> dynamic
o2 = {}
o2.x = 0
o2.y = 0
o2.radius = 100
o2.area = function () {
    return Math.PI * this.radius * this.radius;
}
// OOP -> Class Employee-> new Employee
let Circle = function (x, y, radius) { // Class -> constructor
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    }
}
let o3 = new Circle(0, 0, 100);
let o4 = new Circle(1, 1, 200);
console.table(o3)
console.table(o4)
console.log(o3.area())
console.log(o4.area())

// Since ES6
class Cember { // Class -> Circle
    constructor(x, y, radius) {  // constructor
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.area = function () {
            return Math.PI * this.radius * this.radius;
        }
    }
}

let o5 = new Cember(200, 200, 400);
console.table(o5)
console.log(o5.area())
for (let p in o5) { // reflection
    // console.log(p+": "+o5[p]);
    console.log(`${p}: ${o5[p]}`)
}
o5.hasOwnProperty("radius")
// Inheritance
// old syntax
Circle.prototype.color = "Red";
Circle.prototype.fun = function () {

};

// ES6 syntax -> syntactic sugar
class RenkliCember extends Cember {
    constructor(x, y, radius, color) {
        super(x, y, radius);
        this.color = color;
    }
}

let kirmiziCember = new RenkliCember(1, 2, 3, "sari");

// function
function run(p){
    return p.x * p.y + p.z;
}

function gun(x=1, y=2, z=3) { // ES6
    return x * y + z;
}
function sun(x, y, z) {
    x = x || 1;
    y = y || 2;
    z = z || 3;
    return x * y + z;
}

let fun = function (x, y, z) {
    if (arguments.length != 3)
        throw "you must provide 3 parameters";
    return x * y + z;
}
console.log(gun())
console.log(gun(1))
console.log(gun(1, 2))
console.log(gun(1, 2, 3))
run({y: 2, z: 3,x:1});
console.log(gun(1, 2, 3, 4))
// array
numbers = new Array(4,8,15,16,23,42)
numbers = [4,8,15,16,23,42]
console.log(numbers[0]) // 4
console.log(numbers[5]) // 42
console.log(numbers.length) // 6
// loops - arrays
numbers[10] = 10
for (let i=0;i<numbers.length;++i){
    console.log(`${i}: ${numbers[i]}`);
}
for (let i in numbers){
    console.log(`${i}: ${numbers[i]}`);
}
for (let n of numbers){
    console.log(n);
}
// sorting arrays
// partial order function
// if x < y -> -1
// if x == y -> 0
// if y < x -> +1
numericOrderAsc = function(x,y){return x-y;}
numericOrderAscLambda = (x,y) => x-y;
numericOrderDesc = function(x,y){return y-x;}
numericOrderDescLambda = (x,y) => y-x;
numbers.sort(numericOrderAsc)
numbers.sort(numericOrderDesc)
names = ["jack", "kate", "james", "jin", "ben"]
names.sort()
names.sort(function(x,y){return y.localeCompare(x)})
"kate".localeCompare("jack")