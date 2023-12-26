

let obj1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
}

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

let obj2 = {
    key1: function() {
        console.log("function definition as property value")
    }
}

// enhanced literal object
let obj3 = {
    key1() {
        console.log("Enhanced literal object")
    }
}

let obj4 = {
    key1: () => {
        console.log("Inline arrow function")
    }
}

console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)


let whatAge = function() {
    console.log(this.age);
    return this.age;
};

let obj5 = {};
obj5.age = 100;
obj5.showAge = whatAge;

console.log(obj5);
console.log(obj5.showAge());

let obj6 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },

    set fullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ');
    },
}

console.log(obj6);
console.log(obj6.fullName);

obj6.fullName = "doe john";

console.log(obj6.fullName)

let wholeName = function fullName() {
    console.log("internal named function expression");
    // function, used this method to call functions only for internal references
    console.log(fullName);
    return "IIFE Functions"
}

obj6["wholeName"] = wholeName;

console.log(obj6.wholeName());

