let employee = {
    name: "Vaibhav Tayade",
    gender: "Male",
    age: "23"
}

//employee.age = "25";

// employee = {
//     name: "Vaibhav Tayade",
//     gender: "Male",
//     age: "25"
// }

employee = { ...employee, gender: "Uber" }

console.log(employee);

// normal array concat() method

let arr = [1, 2, 3];
let arr2 = [4, 5];

//arr = arr.concat(arr2);
arr = [...arr, ...arr2];

console.log(arr); // [ 1, 2, 3, 4, 5 ]

// copying without the spread operator
let arr3 = ['a', 'b', 'c', 'z'];
let arr4 = arr3;
arr4 = [...arr4, 'z'];

console.log(arr4); // [ 'a', 'b', 'c' ]

const user1 = {
    name: 'Jen',
    age: 22,
};

const user2 = {
    name: "Andrew",
    location: "Philadelphia"
};

const mergedUsers = { ...user1, ...user2 };
console.log(mergedUsers)