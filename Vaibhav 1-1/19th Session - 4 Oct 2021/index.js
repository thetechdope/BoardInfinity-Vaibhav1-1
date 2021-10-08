/*
    Today's Topics

    Manipulating Style, Text, Content, Attributes, Events, DOM methods - createElement, setAttribute, appendChild, append
        
    Form Submission
    AJAX Introduction
    JQuery Introduction

*/

/* Using For Loop */

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let outputArray = [];

for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 == 0) {
        outputArray.push(inputArray[i]);
    }
}

console.log("Even Elements : ", outputArray);

/* Using Filters */

let outputArrayUsingFilter = inputArray.filter((element) => {
    if (element % 2 == 0) {
        return false;
    }
    return true;
});

console.log("Odd Elements : ", outputArrayUsingFilter);
