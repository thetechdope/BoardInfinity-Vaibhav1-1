console.log('Let\'s Learn JavaScript (3rd Session)');

/* Previous Assignment */

const number = parseInt(prompt('Table for : '));

var person = (prompt("Please enter your name : "));
console.log("Hello " + person);

const number1 = "1";
console.log(typeof(number));
console.log(typeof(parseInt(number)));

/* Literal Method Of Creating an Array */

const arrayOfNumbers = [1, 2, 3, 4];
const arrayOfStrings = [
    "Akshay",
    "Vaibhav"
];
const mixedArray = [];
mixedArray[0] = "Vaibhav Tayade";

console.log(arrayOfNumbers);
console.log("3rd Index Value : " + arrayOfNumbers[2]);
console.log(arrayOfStrings);
console.log(mixedArray);


/* Declaring Array Using New Keyword */

let newArray = new Array(1, 2, 3, "Akshay", "Khurana", 3, 4);
console.log(newArray);
newArray[5] = 33;
console.log(newArray);


// Methods Of Array

// Length

console.log(newArray.length);

let unsortedArray = [2, 5, 8, 1, 6, 9, 0, 15, 10, 22];
console.log(unsortedArray);
let sortedArray = unsortedArray.sort();
console.log(sortedArray);

let unsortedStringArray = ["Apple", "Grapes", "Banana", "Kiwi"];
console.log("Initial Array -> " + unsortedStringArray);
console.log("Ascending Order -> " + unsortedStringArray.sort());
console.log("Descending Order -> " + unsortedStringArray.sort().reverse());

for(let i = 0; i < unsortedStringArray.length; i++) {    
    console.log(unsortedStringArray[i]); // Print Array Elements Using Index
}

let oldArray = [2, 4, 6, 8, 10];
let newArray2 = oldArray.map(multiplyBy2);
let newArray3 = oldArray.map(multiplyBy3);

function multiplyBy2(value) {
    return value * 2;
}

function multiplyBy3(value) {
    return value * 3;
}

console.log("Old Array : " + oldArray);
console.log("New Array (Multiply by 2): " + newArray2);
console.log("New Array (Multiply by 3): " + newArray3);



/*  Assignment To Be Done Before Next Class */

/* Assignment 1 

Take a number from a user (Using Prompt Box ) & display whether it is prime or odd.

*/

/* Assignment 2

Read about Objects & this operator.

*/
