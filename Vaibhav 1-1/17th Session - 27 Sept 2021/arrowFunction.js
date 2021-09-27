const human1 = {
    age: 10,
    grow: function () {
        this.age++;
    }
};

human1.grow();
console.log(human1.age); // 11

const human = {
    age: 10,
    grow: () => {
        this.age++;
    }
};
human.grow();
console.log(human.age); // 10


function regularFunction() {
    return "Vaibhav";
}

const arrowFunctionOld = (name) => {
    return `Hello ${name}`;
}

const arrowFunction = (name) => `Hello ${name}`;

const arrowFunctionNew = name => `Hello ${name}`;

console.log(regularFunction());
console.log(arrowFunctionOld(`Vaibhav`));
console.log(arrowFunction(`Akshay`));
console.log(arrowFunctionNew(`Vaibhav`));