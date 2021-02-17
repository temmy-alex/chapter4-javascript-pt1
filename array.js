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
console.log(filteredFruits);
// console.log(fruits.pop());

// for(i = 0; i < fruits.length; i++)
// {
//     // console.log(fruits[i])
// }

let numbers = [40, 100, 1, 5, 25, 10];
console.log(numbers.sort());
// console.log(number.sort(function(a, b){return a - b}));
console.log(numbers.sort(function(a, b){return a - b}));
