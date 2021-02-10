// Asynchronous Programming -> async func.
class Employee {
    constructor(fullname, salary) {
        this.fullname = fullname;
        this.salary = salary;
        // this.sayHello = this.sayHello.bind(this);
    }

    sayHello = () => { // sync.
        console.log(`Hello, ${this.fullname}!`);
    }
}

let jack = new Employee("Jack Bauer", 100000);
jack.sayHello(); // this -> jack
// async.
// callback function <- TimeOut
window.setInterval(jack.sayHello, 1000);
let sync_get_sum = async function (numbers) {
    if (numbers === undefined) throw "provide numbers";
    let sum = 0;
    for (let number of numbers)
        sum += number;
    return sum;
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

async function example() {
    try {   // await -> async function
        let sum = await sync_get_sum(numbers);
        console.log(sum);
    } catch (e) {
    }
}
example().then(()=>{});
let async_get_sum = function (numbers) {
    return new Promise((resolve, reject) => {
        if (numbers === undefined) reject("provide numbers");
        let sum = 0;
        for (let number of numbers)
            sum += number;
        resolve(sum);
    });
};
let promise_sum = async_get_sum(numbers);
// do more important operations
// callback function
promise_sum.then(sum => console.log(sum)) // event-driven programming
    .catch(e => console.error(e))
// Event-driven Programming