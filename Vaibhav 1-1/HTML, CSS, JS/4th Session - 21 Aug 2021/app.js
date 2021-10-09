console.log("4th Session");

// console.log("2 * 2 = ", 2 * 2);
// console.log("2 ** 10 = ", 2 ** 10);

// const days = ['Monday', 'Tuesday', 'Wednesday'];

// function myFunction (value) {
//     console.log('Today is ' + value + '!');
// }

// days.forEach(myFunction);



// Assignment 1

// Differences between map and forEach


// Objects

// const car = {
//     model : 1999,
//     color: 'white'
// };

// console.log(car);
// console.log(car.model);

// const employee = {
//     name: 'Vaibhav Tayade',
//     company: 'Uber',
//     gender: 'male'
// }

// console.log(employee.company);


// Functions

// With No Arguments

// Function Declaration & Definition 

// function myFunction() {
//     console.log('My Function has been called.');
// }


// myFunction(); // Function Calling


// Single Argument

// function isOddOrEven (number) {
//     if(number % 2 == 0) {
//         console.log('Number is even!');
//     } else {
//         console.log('Number is odd!');
//     }
// }

// isOddOrEven(7);
// isOddOrEven(70);


// With Multiple Arguments

// function multiplyNumber(number, multiplier) {
//     console.log(number * multiplier);
// }


// multiplyNumber(2, 3);
// multiplyNumber(200, 300);

// const employee = {
//     firstName: 'Vaibhav', // Property 1
//     lastName: 'Tayade', // Property 2
//     company: 'Uber', // Property 3
//     gender: 'male', // Property 4
//     fullName: function () { // Method or Function
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// console.log(employee['company']);
// console.log(employee.fullName());

// const car = {
//     model: 1999,
//     color: 'white',
//     name: 'Santro'
// };

// console.log(car);
// console.log(typeof(car));


// const keyArray = Object.keys(car);
// const valueArray = Object.values(car);

// console.log("Object Keys : ", keyArray); // ['model', 'color', 'name']
// console.log("Object values : ", valueArray); // [1999, 'white' 'Santro']


// Map

// Object.keys(car).map(function (element) {
//     console.log(element);
// });


// Function 


// function myFunction () {
//     console.log('Akshay');
//     return 2;
//     console.log('Vaibhav');
// }

// const myFunctionValue = myFunction();
// console.log(myFunctionValue);


// const arrayOfNumber = [2, 3, 4, 1, 9, 7];

// function bubbleSort(array) {
//     var flag = false;
//     while (!flag) {
//         flag = true;
//         for (var i = 1; i < array.length; i += 1) {
//             if (array[i - 1] > array[i]) {
//                 flag = false;
//                 var tmp = array[i - 1];
//                 array[i - 1] = array[i];
//                 array[i] = tmp;
//             }
//         }
//     }

//     return array;
// }

// console.log(bubbleSort(arrayOfNumber));
// console.log(arrayOfNumber.sort());


for (var i = 0; i < 7; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

console.log('Outside Loop');