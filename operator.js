let age = 70;
let status = 'Aman';
let province = 'Jakarta';

// Assignment Operator
// console.log(age *= 2)
// console.log(age += 2)
// console.log(age -= 2)
// console.log(age /= 2)

// Comparison Operator
// if(age > 20)
// {
//     console.log("Enter");
// }else{
//     console.log("Not Enter");
// }

// Ternary operator
var newage = age >= 20 ? 'Enter' : 'Not Enter'
var newage1 = age <= 20 ? 'Enter' : 'Not Enter'
var newage2 = age < 20 ? 'Enter' : 'Not Enter'

// Logical Operator menghasilkan boolean (True / False)
// AND &&
// OR ||
// Negation !

// AND Condition
var conditionZone = (province == 'Jakarta' && status == 'Aman') ? 'Zona Hijau' : 'Zona Merah'

// if(province == 'Jakarta' && status == 'Aman')
// {
//     console.log('Zona aman')
// }else{
//     console.log('Zona Merah')
// }


if(province == 'Jakarta' && status == 'Tidak Aman')
{
    console.log('Zona Hijau');
}else if(province == 'Jakarta' && age == 50){
    console.log('Zona Rawan');
}else if(province == 'Bogor' && status == 'Tidak Aman'){
    console.log('Zona Rawan 1')
}else{
    console.log('Kondisi Belum jelas')
}

let job = 'guru';


switch (job) {
    case 'guru':
        console.log('Bekerja sebagai guru')
        break;
    case 'supir':
        console.log('Bekerja sebagai supir')
        break;
    case 'nelayan':
        console.log('Bekerja sebagai nelayan')
        break;
    default:
        console.log('Status pekerjaan tidak ditemukan');
}

let memory = '4GB';
let laptop = 'A';
let ssd = '256GB';

switch(true){
    case (laptop == 'A' && memory == '4GB'):
        console.log('Spesifikasi belum memenuhi')
        break;
    case (laptop == 'B' && memory == '4GB'):
        console.log('Spesifikasi sudah memenuhi')
        break;
    case (laptop == 'C' && memory == '8GB' || ssd == '256GB'):
        console.log('Spesifikasi lebih dari rata-rata')
    default:
        console.log('Spesifikasi tidak ditemukan')
}

// OR Condition
var condition_zone1 = (province == 'Tangerang' || status == 'Aman') ? 'Zona Aman' : 'Zona Rawan'
var privileges = age === 20 ? 'Allow' : 'Not Allow';
// var notPrivileges = age != 20 ? 'Allow' : 'Not Allow';
var notPrivileges1 = age !== 20 ? 'Allow' : 'Not Allow';

// == hanya mengecek nilai
// === mengecek nilai dan tipe data nilai nya

// console.log('Tipe data age ' + typeof(age));
// console.log(privileges);
// console.log(notPrivileges1);
// Tabel wilayah : id, province, status

// console.log(newage)
// console.log(newage1)
// console.log(newage2)
// console.log(conditionZone)
// console.log(condition_zone1)