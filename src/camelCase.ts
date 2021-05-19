/***************Introducción a Typescript**************
/*var name1 : string = "Marcelina";
name1 = 21;
console.log(name1);
/******************************************************
let text : string = "Josie";
let old : number = 25;
function greet(){
    return `Hello ${text}, your age is ${old}`;
}
console.log(greet());
/******************************************************
let a: never;
function never(): never{
while (true){}
}
//Si intentamos inicializar un variable del tipo never lanzara error!
let a: never = false; 
/******************************************************
function greet(name : string, old : number):never{
    let message = `Hello ${name}, your age is ${old}`;
    return message;
}
console.log(greet("Josie", 25));
/******************************************************
function greet(text : string, old : number) : string {
    return `Hello ${text}, your age is ${old}`;
}
console.log(greet("Josie", 25));
/******************************************************/
function greet(day: number, month: string, year: number, func: (d: number, m:string, y: number)=>string): string {
    return func(day, month, year);
}
console.log(greet(21, "September", 1997, (d: number, m: string, y: number): string => {
    let name = "Marcelina";
    let old = 23;
    return `Hello, my name is ${name}, I am ${old} years old, I was born on ${m} ${d}, ${y}.` ;

}))