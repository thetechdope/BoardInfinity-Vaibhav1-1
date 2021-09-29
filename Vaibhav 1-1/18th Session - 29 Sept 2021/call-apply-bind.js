let object1 = {
    firstName: "Akshay",
    lastName: "Khurana",
    printFullName: function () {
        console.log(this.firstName, this.lastName);
    }
}

let object2 = {
    firstName: "Vaibhav",
    lastName: "Tayade"
}

object1.printFullName();
object1.printFullName.call(object2); // Function Borrowing

// let printFullName = function (city, state) {
//     console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state);
// }

// printFullName.call(object1, "Meerut", "UP");
// printFullName.apply(object2, ["Pune", "Maharashtra"]);

// let printMyName = printFullName.bind(object1, "Meerut", "UP");

// printMyName();