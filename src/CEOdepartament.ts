import Department from "./departament"
var Admin: string [] = [];
interface CEODepartament extends Department{
    admins: string;
}
class CEODepartemanet{
    static admins: string [];
    constructor(public admins: string []){
        this.admins = admins;
    }
    addAdmins(){
        console.log("Available roles", this.admins);
    }
    Admins = Admin.concat(this.admins);
}
let admins = new CEODepartemanet (["AUTHOR", "ADMIN"]);

console.log(admins.addAdmins());