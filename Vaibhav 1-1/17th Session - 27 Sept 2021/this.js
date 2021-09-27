/* This Keyword */

let firstName = "Vaibhav"; // Global Object (Window Object)
let lastName = "Tayade";

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        console.log(this);
        return this.firstName + " " + this.lastName; // person Object
    }
};

console.log(person.fullName());