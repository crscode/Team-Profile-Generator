const Employee = require("./employee");


// create a class called intern that extends Employee
class Manager extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email, role);
        this.school = school

        
    };
    
    getSchool() {
        return this.school;
    };
    getRole() {
        return Manager;
    };
}

// export manager




module.exports = Manager;
