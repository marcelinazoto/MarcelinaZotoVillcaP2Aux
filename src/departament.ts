interface Department{
    owner: string,
    id: number,
    workers: string [],
    createWorker: string [],
    showEmployeesInfo: string []
}
class Department{
    static owner: string;
    static id: number;
    static workers: string [] = ["Daniel", "Manuel", "Rafael"];
    static createWorker: string [];
    static showEmployeesInfo: string [] = [];
    constructor(owner: string,  id: number,  createWorker: string []) {
        this.owner = owner;
        this.id = id;
        this.workers = Department.workers;
        this.createWorker = createWorker;
        this.showEmployeesInfo = Department.showEmployeesInfo;
    }
    getworkers(){
        return this.owner;
    }
    addWorker(){
        console.log("Name", this.owner);
        console.log("Id", this.id)
    }
    getEmployeesInfo(){
        this.workers = this.workers.concat(this.createWorker);
        this.showEmployeesInfo = this.workers;
        console.log("Workers", this.showEmployeesInfo)
    }
}
let worker = new Department("Marcelina", 23, ["Ariana", "Lilian", "Daniela"]);
console.log(worker.addWorker());
console.log(worker.getEmployeesInfo());

export default Department; 