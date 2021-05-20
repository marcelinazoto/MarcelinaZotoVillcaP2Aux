class Person implements Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    greet(){
        let greet = "Hello";
        console.log(`${greet}, my name is ${this.name}. I'm ${this.age} years old.`);
    }
}
interface Person {
    name: string,
    age: number,
    greet(): void
}
interface Data{
    name: string;
    age: number;
    lastname? : string;
}
interface Greeting extends Data{
    greet(): void
}
let message = new Person("Marcelina", 23);
console.log(message.greet());