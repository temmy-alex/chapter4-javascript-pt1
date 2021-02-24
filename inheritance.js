// Parent Class
class Student {
    constructor(username, join_date, classRoom){
        this.username = username;
        this.join_date = join_date;
        this.classRoom = classRoom;
    }

    join(){
        console.log(this.username + ' tergabung dalam kelas ' + this.classRoom + ' pada tanggal ' + this.join_date);
    }

    static showMember(){
        console.log('Sudah berisi 100 user');
    }
}

// Sub Class / Child Class
class Subscribe extends Student {
    constructor(username, join_date, classRoom, packageClass) {
        super(username, classRoom, join_date);
        this.packageClass = packageClass;
    }

    packageJoin(){
        console.log('Hi ' + this.username + ' telah mengambil paket kelas ' + this.packageClass);
    }
}

// let newStudent = new Student('testing', '2020-01-01', 'premium');
// newStudent.join();
let newSubscribe = new Subscribe('tester1', 'Premium', '2020-01-12');
newSubscribe.join();
Subscribe.showMember();