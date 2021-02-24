// Class with Constructor
class Person {
    // Static Property
   static email = 'testing@mail.com';
   static isLiving = true;
   static status = ['active', 'inactive'];
    
    // Property
    constructor(firstname, lastname, usia, pekerjaan) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.usia = usia;
        this.pekerjaan = pekerjaan;
    }
    
    // Method
    getFullname () {
        return this.firstname + ' ' + this.lastname;
    }

    getInfo(usia, pekerjaan){
        return `Usia ${usia} Pekerjaan ${pekerjaan}`
    }

    static showAddress()
    {
        return 'Alamat';
    }

    getName(){
        return 'Name';
    }
}

// Function Programming / Create Class with function
function ShowPoint(x, y){
    this.number1 = x;
    this.number2 = y;
}

ShowPoint.prototype.toString = function toString(){
    return '(' + this.number1 + ', ' + this.number2 + ')';
}

console.log(new ShowPoint(1,2).toString());

// Cara 1 set nilai di constructor
var newPerson = new Person();


newPerson.firstname = 'Budi';
newPerson.lastname = 'Test';
newPerson.usia = 19;
newPerson.pekerjaan = 'Developer';
// console.log(newPerson.prototype.getName())

// newPerson.email = 'newemail@gmail.com';
// console.log(newPerson.firstname + ' email ' + newPerson.email);


// Cara 2
var newPerson = new Person('andi', 'susilo', 64, 'programmer');
// console.log(newPerson.getFullname());

// Akses static property
// console.log('Email ' + Person.email);
// Akses static method
// console.log('Static Method ' + Person.showAddress());
// console.log('IsLiving ' + Person.isLiving);
// console.log('Status ' + Person.status[0]);
// console.log(Person);
// console.log(Person.getAge())