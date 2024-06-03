
function NameValidation(element) {
    const ok01 = document.getElementById('ok01');
    const name = form[element];
    let elementValue = name.value;

    if (elementValue.trim() === '') {
        ok01.classList.add('rojo');
        ok01.classList.remove('verde');

    } else {
        ok01.classList.add('verde');
        ok01.classList.remove('rojo');
        return elementValue;
    };
};

function DestinyValidation(element) {
    const ok02 = document.getElementById('ok02');
    const destiny = form[element];
    let elementValue = destiny.value;

    if (elementValue.trim() === '') {
        ok02.classList.add('rojo');
        ok02.classList.remove('verde');

    } else {
        ok02.classList.add('verde');
        ok02.classList.remove('rojo');
        return elementValue;
    };
};

function NumbersValidation(number1, number2) {
    const ok03 = document.getElementById('ok03');
    const num1 = form[number1];
    const num2 = form[number2];

    let elementValue1 = num1.value;
    let elementValue2 = num2.value;

    if (elementValue1.trim() === '' || elementValue2.trim() === '') {
        ok03.classList.add('rojo');
        ok03.classList.remove('verde');

    } else {
        ok03.classList.add('verde');
        ok03.classList.remove('rojo');
        return elementValue1, elementValue2;
    };
};

const form = document.forms['frm'];

form.addEventListener('submit', function(formEvent) {
    formEvent.preventDefault();
    const name = NameValidation('nombre');
    const destiny = DestinyValidation('destino');
    const numbers = NumbersValidation('numero1', 'numero2');

});