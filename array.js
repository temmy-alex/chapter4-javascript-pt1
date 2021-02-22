let laptop = ['A', 'B', 'C'];
let monitor = {name: 'GL'}
var mobil = []
mobil['merk'] = ['TY', 'AV'];
mobil['price'] = 300;
mobil['year'] = 400;
laptop[1] = 'D'
laptop['color'] = 'Red';
let fruits = ['orange', 'mango', 'papaya'];
fruit_length = fruits.length;
// Array ada 2 macam
// array memiliki key dan value
// console.log(laptop[0])
// array laptop memiliki index 0, 0 itu sebagai key value nya adalah A default key dalam array adalah index angka

// Array associative 
// Array non associative
// console.log(typeof(laptop))
// console.log(laptop['color'])
// console.log(mobil['merk'][1])
// console.log(fruits.length);
// console.log(fruits.sort());
// console.log(fruits.reverse());
// console.log(fruits);
// console.log(fruits.push('Kiwi'))
// console.log(fruits.splice(2, 1));
// delete fruits[0];
// console.log(fruits);
var filteredFruits = fruits.filter(function(e) { return e !== 'mango' })
// console.log(filteredFruits);
// console.log(fruits.pop());

// for(i = 0; i < fruits.length; i++)
// {
//     // console.log(fruits[i])
// }

let numbers = [20, 30, 40, 50, 60, 70];
var highlow = numbers.sort(function(a, b){ return a-b; }) 
console.log('Terkecil : ' + highlow[0]); 
console.log('Terbesar : ' + highlow[highlow.length-1]);
var desc = numbers.sort(function(a,b){ return b-a });
console.log(desc);

let fsw_seven = ['Eric', 'Fateh', 'Casey', 'Didi'];
console.log(fsw_seven.sort().reverse().toString().join(''));


// console.log(numbers.sort());
// console.log(number.sort(function(a, b){return a - b}));
// console.log(numbers.sort(function(a, b){return a - b}));

var result = numbers.map(angka => (angka * 2 -1))
var resultWithCaption = numbers.map(angka => ('Hasil ' + angka + ' '));
var resultWithForeach = numbers.forEach(angka => {
    // var convertToAngka = angka * 2 -1;
    // console.log(typeof(convertToAngka));
})

// callback = anonymous function = closure
const bikinPusing = numbers.map(function (value, index) {
    return value + (9 + (10 * (index + 1)));
});

const mapWithFilter = numbers.filter(num => {
    return num > 40;
});

let sum = function(x, y, z){
    console.log(x + y + z)
}

const people = ['Person 1', 'Person 2', 'Person 3'];
console.log(...people);

let nums = [1,3,5];
// sum(nums);

let spreadFunc = function (...args){
    return args;
}

const testCallback = function(){
    console.log('Call callback function');
}

// Callback with param
const callbackWithParam = function(name){
    console.log('My name is ' + name);
}

// Callback with spread
const callbackWithSpread = function(...args){
    return sum(args);
}

// console.log(testCallback());
// console.log(callbackWithParam('test'));
// console.log(callbackWithSpread(nums));
// setTimeout(() => {
//     console.log('This message show after 3 seconds');
// }, 3000);


const bilangan = [5, 10, 15, 20]
const manipulateNum = bilangan.filter(num => num > 5).map(num => num * 2)
const reverseMap = bilangan.reverse().map(num => num * 5)
const reverseFunc = bilangan.reverse().map(function(num){
    return num * 5
})
// console.log(manipulateNum.toString());
// console.log('With closure');
// console.log(reverseMap);
// console.log('Simple function')
// console.log(reverseFunc);
// function sum(x)
// {
//     return x * 5
// }

// console.log(spreadFunc(numbers))

// console.log(mapWithFilter);

// var mapWithCondition = numbers.map(angka => {
//     if(angka > 20) {
//         console.log(angka * 2)
//     }else{
//         console.log(angka * 5)
//     }
// })
// var test = numbers.map(2);
// console.log(result.toString())
// console.log(test)
// console.log(resultWithForeach);
// var stringReplace = resultWithCaption.toString();
// console.log(stringReplace.replace(',', ''))
// console.log(mapWithCondition);
// console.log(bikinPusing);

var tanggalHariIni = new Date(); 
// console.log('Hari ini tanggal ' + tanggalHariIni.getDate() + '-' + (tanggalHariIni.getMonth() + 1) + '-' + tanggalHariIni.getFullYear()); 
// console.log('Besok tanggal ' + (tanggalHariIni.getDate() + 1) + '-' + (tanggalHariIni.getMonth() + 1) + '-' + tanggalHariIni.getFullYear()); 
// console.log('Kemarin tanggal ' + (tanggalHariIni.getDate() - 1) + '-' + (tanggalHariIni.getMonth() + 1) + '-' + tanggalHariIni.getFullYear());
