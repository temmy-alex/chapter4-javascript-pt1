export class Student {
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

export class Car {
    constructor(brand, color, speed){
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }

    infoVehicle(){
        console.log('Merk ' + this.brand + ' kecepatan ' + this.speed + ' Warna ' + this.color);
    }
}

export default {
    Car,
    Student
}