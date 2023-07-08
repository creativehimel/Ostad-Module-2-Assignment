/* 
* Exercise 1: 
Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.

Example:

Input:

const obj = { name: 'John', age: 30, city: 'New York' };

const arr = [10, 20, 30, 40];


Output: 

{ name: 'John', age: 30 }

*/

// Solution

function destructureExample (obj, arr) {
    let {name, age} = obj
    return {name, age}
}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];
let result = destructureExample(obj, arr)
console.log(result)

/* 
* Exercise 2:
Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.
*/

//Solution

function sumNumbers(...args){
    let sum = 0
    for(let arg of args)
    sum +=arg
    return sum
}
let sumOfNumbers = sumNumbers(1, 2, 3, 4, 5, 6)
console.log(sumOfNumbers)


/* 
* Exercise 3: 
Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."
*/


// Solution

function createGreeting(name){
    return `"Hello, ${name}! Welcome to our website."`
}
let greetingMsg = createGreeting('Md. Himel Ali')
console.log(greetingMsg);


/* 
* Exercise 4: 

Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.
*/

// Solution

function isEven(num){
    return num % 2 === 0 ? 'Even' : 'Odd'
}
let isEventOdd = isEven(26)
console.log(isEventOdd);

/* 
* Exercise 5: 

Convert the following function to an arrow function:

function multiply(a, b) {
  return a * b;
}

*/

// Solution:

multiply = (a, b)=>{
    return a * b
}

let mul = multiply(5, 8)
console.log(mul)


/* 
* Exercise 6: 
Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).
*/

// Solution

function getLargestNumber(num1, num2) {
    let result = num1 && num1 > num2 ? num1 : num2
    console.log(result)
}

getLargestNumber(50, 10)

/* 
* Exercise 7: 
Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.
*/

// Solution

const address = { street: '123 Main St', country: 'USA' };

function getAddressCity(address){
    let result = address?.city || "Unknown"
    console.log(result)
}

getAddressCity(address)


/* 
* Exercise 8: 
Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.
*/

// Solution

function doubleNumbers(arr) {
    let doubleNumbersArr = arr.map(function (value) {
        return value * 2
    })
    console.log(doubleNumbersArr)
}

doubleNumbers([1, 2, 3, 4])


/* 
* Exercise 9: 
Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.
*/

// Solution

function filterEvenNumbers(arr){
    let filteredArr = arr.filter(function (value) {
        return value % 2 === 0
    })
    console.log(filteredArr)
}

filterEvenNumbers([1, 2, 3, 4])

/* 
* Exercise 10: 
Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.
*/

function sumArray(arr){
    let sum = arr.reduce(function(prev, curr){
        return prev + curr
    })
    console.log(sum)
}
sumArray([1, 2, 3, 4, 5])

/* 
* Exercise 11: 
Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.
*/

// Solution

function sortNumbers(arr) {
    let sortNumbersArr = arr.sort(function (a, b) {
        if(a >b){
            return 1
        }else if (a < b){
            return -1
        }else {
            return 0
        }
    })
    console.log(sortNumbersArr)
}

sortNumbers([51, 1, -2, 0,-25])
