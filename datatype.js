// komentar 1 line
/* komentar 1 line
komentar 1 line */

// Tipe dalam JavaScript
// String = Teks
// Number = Integer / Float
// Null
// Boolean = (T / F)
// Undefined
// Date

// String
var words = 'Hello ';
var diffwords = "World!!";
// Concatenation = Penggabungan 2 variable menggunakan operator (+)
var sentences = words + diffwords
var lowercase = sentences.toLowerCase();
var uppercase = sentences.toUpperCase();
var replace_word = diffwords.replace('World!!', 'Dunia');
var phone_number = 081200000;
var nomor_hp = "08120000000";
var test = '';
var test1 = null;
console.log(typeof(test));
console.log(typeof(test1)); 

// console.log('Konversi number to string menggunakan method toString ' + phone_number.toString());
// console.log('Konversi string to number ' + parseInt(nomor_hp));
// console.log('Lowercase function ' + lowercase);
// console.log('Uppercase ' + uppercase);
// console.log('Huruf kecil ' + words);
// console.log('Mengganti teks ' + replace_word);
// console.log(typeof(nomor_hp));

// Number
// Tipe Data Float
var discount = 20.5;
var num1 = 2;
var price = 1000000 / 20.5;
var multiplication = num1 * discount;
var akar = Math.sqrt(64);
// Konversi bilangan negatif ke positif
// console.log(Math.abs(-4.7));

// console.log('Harga setelah diskon ' + price);
// console.log(multiplication);
// console.log(akar);
// console.log('pembulatan kebawah ' + Math.floor(4.7));
// console.log('Pembulatan keatas ' + Math.ceil(4.7));
// console.log(Math.random());
// console.log(Math.max(1,3,5))
// console.log(Math.min(1,3,5))

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = Math.floor((Math.random()*20) + 2);

var rangeRandom = randomInteger(1, 3);
// console.log(randomNumber);
// console.log(rangeRandom);

// Date
// Timestamp
// var date = new Date("2015-03-25T12:00:00");
var date = new Date("03/25/2021");
var year = date.getFullYear();
var month = date.getMonth();
var month1 = date.getUTCMonth();
// console.log(year);
// console.log('Month ' + month);
// console.log('Month UTC ' + month1);