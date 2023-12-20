class Animal{

    constructor(name) {
        this.name = name;
    }

    method1(){
        console.log("method1");
    }

    method2() {
        console.log("method2");
    }

    method3() {
        console.log("method3");
    }

    static method4() {
        console.log("method4");
    }
}

let animal = new Animal("Chittah");
animal.method1();
animal.method2();
animal.method3();

console.log(Animal.prototype.method1());
console.log(Animal.method4())

