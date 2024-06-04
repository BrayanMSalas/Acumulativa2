
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
    const ok04 = document.getElementById('ok04');
    const num1 = form[number1];
    const num2 = form[number2];

    let elementValue1 = num1.value;
    let elementValue2 = num2.value;

    if (elementValue1.trim() === '' || elementValue2.trim() === '') {
        ok03.classList.add('rojo');
        ok03.classList.remove('verde');
        ok04.classList.add('rojo');
        ok04.classList.remove('verde');

    } else if (elementValue1 < elementValue2) {
        ok04.classList.add('verde');
        ok04.classList.remove('rojo');

    } else {
        ok03.classList.add('verde');
        ok03.classList.remove('rojo');
        ok04.classList.add('rojo');
        ok04.classList.remove('verde');
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


const opciones = document.forms['frm'];
opciones.addEventListener('submit', function(){
    const ok06 = document.getElementById('ok06');

    const A = document.querySelector('[name="opcion_1"]');
    const B = document.querySelector('[name="opcion_2"]');
    const C = document.querySelector('[name="opcion_3"]');
    const D = document.querySelector('[name="opcion_4"]');
    const E = document.querySelector('[name="opcion_5"]');
    const F = document.querySelector('[name="opcion_6"]');

    const checkboxes = [A, B, C, D, E, F];
    const checkboxes2 = []
    let contador = 0

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkboxes2.push(checkbox.value);
            contador++;
        }
    }
    console.log(contador);
    console.log(checkboxes2.toString());

    if(contador>=3){
        ok06.classList.add('verde');
        ok06.classList.remove('rojo');

    }
    else{
        ok06.classList.add('rojo');
        ok06.classList.remove('verde');
    }
});