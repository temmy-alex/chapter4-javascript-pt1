// Template String Literal
// Menggunakan tanda (`)
let nama = 'Testing';
console.log(`Halo ${nama}`);

let advertisement = "Hello\n"+
                "Testing";

let info = `Hello
    Testing`

let number1 = 10;
let number2 = 15;
// console.log(`Hasil perkalian ${number1*number2}`)
// console.log(advertisement);
// console.log(info);

// Var & Let & Const
// Global Scope
let x = 20
function test(){
    // Local Scope
    var y = 10
    return x
}

// let x1 = 19
// if(x1 === 20){
//     let y1 = 10
// }

// Hoisting
// x2 = 19
// const x2
// console.log(x1)
// console.log(y1)
// console.log(x2)
// console.log(test())
// console.log(y)

// const person = {
//     name: 'Test',
//     age: 20
// }

// Gunakan freeze agar nilai yang terdapat di property tidak dapat di reassign
// var person = Object.freeze({
//     nama: 'Name 1',
//     age: 20
// })

// person.name = 'Replace'
// console.log(person)

// Arrow Function
// Shorthand penulisan function
/*
    (argument) => {
        return expression
    }

    // Shorthand
    (argument) => expression
*/

// Penulisan function tanpa menggunakan syntax EcmaScript (ES)
function getPrice1(){
    return 250000
}

const getPrice2 = function(){
    return 250000
}

function getName(name){
    return name
}

const getName1 = function(name){
    return name;
}

// Menuliskan arrow function menggunakan ecmascript (ES6)
let getPrices = () => {
    console.log(25000) 
}

let getPrices1 = () => console.log(25000)

// ES6 Arrow function with param string
let getNames = (nama, address) => {
    console.log('Nama ' + nama + 'Address ' + address)
}

let getNames1 = (nama, address) => 'Name ' + nama + 'Address' + address

let getSum = (number1, number2) => {
    console.log(number1 + number2)
}

let getSum1 = (number1, number2) => console.log(number1 + number2)

const Web = {
    teks: 'Hello',
    // render: function(){
    //    setTimeout(function(){
    //         console.log('Show ' + this.teks)
    //    }, 1000);
    // }

    render: function(){
        setTimeout(() => {
            console.log('Show: ' + this.teks)
        }, 1000)
    }
}

// console.log(Web.teks)
// Web.render()

// Ternary Operator
let nilai = 80
// if(nilai >= 75){
//     console.log('Passed')
// }else{
//     console.log('Not Passed')
// }

// console.log((nilai >= 75) ? 'Passed' : 'Not Passed')

// Spread Operator (Pemecahan / Ekstraksi item pada suatu array atau objek atau string)
// string
let teks = 'Learning javascript';
console.log(teks)
console.log(...teks)

// array
let foodMenus = ['Nasi Goreng', 'Bakso', 'Gado-gado']
console.log(foodMenus);
console.log(...foodMenus)

function counting(number1, number2, number3){
    console.log(number1 + number2 + number3)
}

let bilangan = [2,3,4]

// Menghitung dengan cara biasa
counting(bilangan[0], bilangan[1], bilangan[2])

// Menggunakan apply
counting.apply(null, bilangan)

// Spread operator
counting(...bilangan)

let arrBilangan1 = [0,1,2]
// let arrBilangan2 = [3,4,5]
let arrBilangan2 = [3, 4, ...arrBilangan1]
console.log(arrBilangan2)

// Menggabungkan array dengan method concat
let arrConcat = arrBilangan1.concat(arrBilangan2)
// console.log(arrConcat)

// Menggabungkan array dengan spread operator
let arrSpread = [...arrBilangan1, ...arrBilangan2];
// console.log(arrSpread)

const user = {username: 'testing', email: 'testing@gmail.com'};
const profile = {nama: 'name1', city: 'Jakarta', email: 'testing1@gmail.com'};
// Menggabungkan object dengan object assign
const userProfile1 = Object.assign(user, profile)
// Menggabungkan object dengan spread operator
const userProfile2 = {...user, ...profile}
// console.log(userProfile1)
// console.log(userProfile2)

const newUser = {nama: 'Andi'};
const copyNewUser = Object.assign({}, newUser)
const copyNewUser2 = {...newUser};
console.log(copyNewUser);
console.log(copyNewUser2);

// Destructuring
const warna = ['merah', 'kuning', 'hijau'];
const dataUser = ['testing', 'testing@gmail.com', 'jl testing'];

// cara biasa
// let satu = warna[0]
// let dua = warna[1]
// let tiga = warna[2]

// console.log(satu)
// console.log(dua)
// console.log(tiga)

// Array destructuring
let [satu, dua, tiga] = warna
// let [satu, dua] = warna
let [namalengkap, email, alamat, status='aktif'] = dataUser
// console.log(satu)
// console.log(dua)
// console.log(tiga)
// console.log(namalengkap + ' email '  + email + ' alamat ' + alamat  + ' status ' + status)

// Object Destructuring
const pengguna = {
    namaLengkap: 'Anonymous',
    gender: 0,
    age: 20
}

const pengguna1 = {
    namaLengkap: 'Anonymous',
    gender: 0,
    age: 20
}

const user1 = {
    id: 1,
    is_verified: true
}

// let namaLengkap = pengguna.nama
// let jenisKelamin = pengguna.gender
// let umur = pengguna.age

// Object Destructuring
const { namaLengkap, gender, age, alamat1='Jl Testing' } = pengguna
const { id, is_verified } = user1

// Kombinasi array dan object destructuring
const users = [
    {id: 1, name: 'Andi'},
    {id: 2, name: 'Iqbal'},
    {id: 3, name: 'Arif'}
]

const dataUser1 = {
    name2: 'Telas',
    gender: 'L',
    age: 27
};

let {name2, ...lainnya} = dataUser1
console.log(name2)
console.log(lainnya)

let [,, {name}] = users
// console.log(name)

const cars = ['Car A', 'Car B', 'Car C']
let [mobilsatu, ...etc] = cars
// console.log(mobilsatu)
// console.log(etc)


// console.log(namaLengkap)
// console.log(gender)
// console.log(age)
// console.log(alamat1)

// console.log(id)
// console.log(is_verified)

// Cetak function biasa
// console.log(getPrice1)
// console.log(getPrice2)

// Cetak arrow function javascript
// getPrices()
// getPrices1()
// getNames('Andi', 'Kebon Jeruk')
// getNames1('Andi', 'Parung')
// getSum(1,2)
// getSum1(1,2)