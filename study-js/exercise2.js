// Functional Programming -> lambda syntax
numbers = [4, 8, 15, 16, 23, 42]
//  Even -> Squared -> Sum
// Classical Solution
let sum = 0
for (let number of numbers) { // external loop
    if (number % 2 == 0) { // even
        sum = sum + number * number;
    }
}
console.log(sum)

function even(number) {
    return number % 2 == 0;
}
function squared(number) {
    return number * number;
}
function add(accumulate, number){
    return accumulate + number;
}
// functional programming -> array, framework (MapReduce -> Hadoop (i. HDFS, ii. MapReduce))
// function -> no side-effect -> lambda expression (ES6)
// 1. internal loop
sum = numbers.filter(even)
             .map(squared)
             .reduce(add, 0);
console.log(sum)
// lambda expression --> arrow function
sum = numbers.filter( (n) => { return n % 2 == 0; })
             .map( (n) => { return n * n; })
             .reduce((acc, n) => {return acc+n; }, 0);
sum = numbers.filter( n => n % 2 == 0)
             .map( n => n * n )
             .reduce((acc, n) => acc+n , 0);
// generator function
function get_evens(numbers){ // blocking function
    let even_numbers = [];
    for (let n of numbers){
        if (n%2 == 0) even_numbers.push(n);
    }
    return even_numbers;
}
let nums = [1,2,3,4,5,6,7,8,9,10];
for (let n of get_evens(nums)){
    console.log(n);
}
function* find_evens(numbers){ // generator function
    for (let n of numbers){
        console.log("find_evens:for:"+n);
        if (n%2 == 0) yield n;
    }
}
for (let n of find_evens(nums)){
    console.log(n);
}
