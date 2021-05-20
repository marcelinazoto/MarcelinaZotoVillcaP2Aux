import Department from "./departament"
interface ReportsDepartment extends Department{
    reports: string [];
    addReport: string [];
}
class ReportsDepartment {
    static reports: string [];
    static addReport: string [];
    constructor(addReport : string []){
        this.reports = new Array();
        this.addReport = addReport; 
    }
    add_Report(){
    }
    greetReport():string[]{
        return this.reports;
    }
    greet(){
        //console.log(`Hello ${name} there are ${reports.length} reports`)
    }
}
let reporte = new ReportsDepartment (['task 004 failed']);
console.log(reporte.greetReport());
