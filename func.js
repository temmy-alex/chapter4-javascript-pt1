function printWord() {
    console.log('Hello World');
}

function print_word() {
    console.log('Hello World');
}

var example = function () {
    console.log('Halo World');
}

// Global Scope
let num1 = 10;
let num2 = 20;

var sum = function () {
    console.log(num1 + num2);
}

// Function with parameter
var multiplication = function (n1, n2) {
    console.log(n1 * n2)
}

var myName = function (name) {
    console.log('My name is ' + name);
}

function total(numb1, numb2) {
    return numb1 + numb2
}

function sum(num1, num2) {
    var totalsum = num1 + num2
    return totalsum
}

// Recursive function = Memanggil function dalam function itu sendiri
function Pangkat(n1, n2) {
    if (n2 == 1) {
        return n1;
    } else {
        return n1 = n1 * Pangkat(n1, n2 - 1);
    }
}

// Function in function = fungsi memanggil fungsi lain
function sumNumber(x, y) {
    // Memanggil fungsi total
    return total(x, y) + total(x, y) * total(x, y);
}

// Function dengan parameter default / optional parameter
function sumWithDefault(x = 0, y = 0) {
    return x + y;
}

var firstname = 'Testing';

function yourName(firstname = '') {
    return 'My Name is ' + firstname;
}

// console.log(Pangkat(3,2));
// console.log(sumNumber(4, 5));
// console.log(sumWithDefault(10, 10));
console.log(yourName(firstname));
// printWord();
// print_word();
// example();
// sum();
// multiplication(2, 2);
// myName();

// console.log(total(3,3))
// console.log(sum(3,3))