/* Javascript is a single threaded synchronous language */

/* Asynchronous Programming */

/* setTimeOut */

// console.log("1");
// console.log("2");
// setTimeout(function () {
//     console.log("Vaibhav");
// }, 0); // Here 2000 is 2000 milliseconds which is equal to 2 seconds
// console.log("3");
// console.log("4");
// console.log("5");


// function printTime() {
//     for (let i = 1; i <= 10; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }

// printTime();

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     } else {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
// }

/* Callback Functions */

function firstFunction(x, y, callBackFunction) {
    console.log("X : ", x);
    console.log("Y : ", y);
    callBackFunction(x + y);
}

function secondFunction(sum) {
    console.log("Sum is : ", sum);
}

firstFunction(5, 7, secondFunction);

// function printSum(x) {
//     console.log("I will calculate the sum of 2 numbers");
//     return function (y) {
//         console.log("Sum is : ", x + y);
//     }
// }



/* Function Currying*/


// let newFunction = printSum(5);
// newFunction(200); // Prints 205

// printSum(5)(100); // Prints 105

// function normalFunction() {
//     return "Vaibhav";
// }

// let a = normalFunction();
// console.log(a); // Prints Vaibhav