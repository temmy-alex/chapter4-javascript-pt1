// var textWithId = document.getElementById('text');
// var textWithClass = document.getElementsByClassName('text1');

// var queryWithSelector = document.querySelector('p');
// queryWithSelector.innerHTML = 'ubah text dengan query selector'

// var manipulateParagraf = document.getElementsByClassName('paragraf');
// console.log(manipulateParagraf);
// manipulateParagraf[0].innerHTML = 'Ubah text dengan class name 1';
// manipulateParagraf[1].innerHTML = 'Ubah text dengan class name 2';
// manipulateParagraf[2].innerHTML = 'Ubah text dengan class name 3';

// document.getElementById('heading').style.color = 'green';

function getValueForm()
{
    let inputForm = document.getElementById('form').elements[0].value;
    document.getElementById('valueFromForm').innerHTML = inputForm * 3;
    event.preventDefault();
}