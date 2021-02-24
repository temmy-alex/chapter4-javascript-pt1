import {Student, Car} from './modules/multi-export.js';

class Subscribe extends Student {
    constructor(username, join_date, classRoom, packageClass) {
        super(username, classRoom, join_date);
        this.packageClass = packageClass;
    }

    packageJoin(){
        console.log('Hi ' + this.username + ' telah mengambil paket kelas ' + this.packageClass);
    }
}
let newSubscribe = new Subscribe('tester1', 'Premium', '2020-01-12');
newSubscribe.join();
Subscribe.showMember();

// Get From Parent Student
let newStudent = new Student('student 1', '2020-01-01', 'Premium');
newStudent.join();

let newCar = new Car('M1', 'Red', '500KM');
newCar.infoVehicle();

