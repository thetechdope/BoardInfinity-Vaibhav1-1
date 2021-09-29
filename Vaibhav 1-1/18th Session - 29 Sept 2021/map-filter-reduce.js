// let object1 = [
//     {
//         firstName: "Akshay",
//         lastName: "Khurana",
//         age: 26
//     },
//     {
//         firstName: "Vaibhav",
//         lastName: "Tayade",
//         age: 24
//     },
//     {
//         firstName: "ABC",
//         lastName: "XYZ",
//         age: 40
//     }
// ];

// object1.map((element) => {
//     console.log("Name is : " + element.firstName + " " + element.lastName, "his age is " + element.age);
// });


/* Map */

// const arrayOfNumbers = [9, 1, 4, 10, 45];

// function triple(x) {
//     return x * 3;
// }

// const newArray = arrayOfNumbers.map(triple);
// console.log("Old Array : ", arrayOfNumbers);
// console.log("New Array : ", newArray);


/* Filter */

function checkIfOdd(x) {
    if (x % 2 != 0) {
        return true;
    }
    return false;
}

const arrayOfNumbers = [9, 1, 4, 10, 45];
const arrayOfOddNumbers = arrayOfNumbers.filter(checkIfOdd);


console.log("Given Array : ", arrayOfNumbers);
console.log("Odd Array : ", arrayOfOddNumbers);



/* Reduce */

// let sum = 0;
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     sum = sum + arrayOfNumbers[i];
// }

// console.log("Sum is : ", sum);


function sum(a, b) {
    return a + b;
}

const sumOfArrayElements = arrayOfNumbers.reduce(sum);
console.log(sumOfArrayElements);
