//ejer 6
function verificarNumero() {
    // Obtener el número ingresado por el usuario
    var numero = document.getElementById('numberToVerify').value.trim();

    // Verificar si el número ingresado es un entero válido
    if (numero === '' || isNaN(numero) || !Number.isInteger(parseFloat(numero))) {
        document.getElementById('resultVerifyNumber').innerHTML = 'Por favor, ingrese un número entero válido.';
        return;
    }

    numero = parseInt(numero); // Convertir a entero

    // Verificar si el número es positivo o negativo
    var esPositivo = (numero >= 0) ? "positivo" : "negativo";

    // Verificar si el número es par o impar
    var esPar = (numero % 2 === 0) ? "par" : "impar";

    // Verificar si el número es múltiplo de 5
    var esMultiploDe5 = (numero % 5 === 0) ? "múltiplo de 5" : "no es múltiplo de 5";

    // Verificar si el número es múltiplo de 10
    var esMultiploDe10 = (numero % 10 === 0) ? "múltiplo de 10" : "no es múltiplo de 10";

    // Verificar si el número es mayor o menor que 100
    var esMayorQue100 = (numero > 100) ? "mayor que 100" : ((numero < 100) ? "menor que 100" : "igual a 100");

    // Mostrar los resultados
    document.getElementById('resultVerifyNumber').innerHTML = `
        <p>${numero} es ${esPositivo}</p>
        <p>${numero} es ${esPar}</p>
        <p>${numero} es ${esMultiploDe5}</p>
        <p>${numero} ${esMultiploDe10}</p>
        <p>${numero} ${esMayorQue100}</p>
    `;
}

function limpiarFormularioVerifyNumber() {
    // Limpiar los campos del formulario y el resultado
    document.getElementById('numberToVerify').value = '';
    document.getElementById('resultVerifyNumber').innerHTML = '';
}


function limpiarFormularioVerifyNumber() {
    // Limpiar los campos del formulario y el resultado
    document.getElementById('numberToVerify').value = '';
    document.getElementById('resultVerifyNumber').innerHTML = '';
}

//ejer 7

function convertirMorse() {
    var inputText = document.getElementById('inputText').value;
    var result = '';

    if (/^[.-\s]+$/.test(inputText)) {
        // Si el input contiene solo puntos, guiones y espacios, se considera código Morse y se convierte a texto
        result = morseToText(inputText);
    } else {
        // Si el input es texto, se convierte a código Morse
        result = textToMorse(inputText.toUpperCase());
    }

    document.getElementById('resultMorseConverter').innerHTML = `<p>Resultado: ${result}</p>`;
}

function textToMorse(text) {
    var morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
    };

    return text.split('').map(char => (char in morseCode) ? morseCode[char] : char).join(' ');
}

function morseToText(morse) {
    var morseCode = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
        '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$', '.--.-.': '@'
    };

    return morse.split(' ').map(code => (code in morseCode) ? morseCode[code] : code).join('');
}

function limpiarFormularioMorseConverter() {
    document.getElementById('inputText').value = '';
    document.getElementById('resultMorseConverter').innerHTML = '';
}

//ejer 8
function encontrarMenorNumero() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var number3 = parseFloat(document.getElementById('number3').value);

    var minNumber = Math.min(number1, number2, number3);

    document.getElementById('resultMinNumber').innerHTML = `<p>El menor número es: ${minNumber}</p>`;
}

function limpiarFormularioMinNumber() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('number3').value = '';
    document.getElementById('resultMinNumber').innerHTML = '';
}

//ejer 9
function calcularFuncionTrigonometrica() {
    var angle = parseFloat(document.getElementById('angle').value);
    var trigFunction = document.getElementById('trigFunction').value;
    var result = '';

    switch (trigFunction) {
        case 'sine':
            result = Math.sin(toRadians(angle));
            break;
        case 'cosine':
            result = Math.cos(toRadians(angle));
            break;
        case 'tangent':
            result = Math.tan(toRadians(angle));
            break;
        default:
            result = 'Seleccione una función válida.';
    }

    document.getElementById('resultTrigFunctions').innerHTML = `<p>El resultado de ${trigFunction}(${angle}°) es: ${result.toFixed(4)}</p>`;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function limpiarFormularioTrigFunctions() {
    document.getElementById('angle').value = '';
    document.getElementById('trigFunction').value = 'sine';
    document.getElementById('resultTrigFunctions').innerHTML = '';
}

//ejer 10
function calcularEdad() {
    var birthDate = new Date(document.getElementById('birthDate').value);
    var currentDate = new Date(); // Obtener la fecha actual del sistema

    // Validar que la fecha de nacimiento no sea igual o mayor a la fecha actual
    if (birthDate >= currentDate) {
        document.getElementById('resultAgeCalculator').innerHTML = 'Por favor, ingrese una fecha de nacimiento válida (debe ser al menos un año antes de la fecha actual.';
        return;
    }

    var ageInMilliseconds = currentDate - birthDate;
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInYears = ageInDays / 365.25;

    // Calcular los segundos, minutos y horas restantes después de calcular la edad en años
    var remainingSeconds = Math.floor(ageInSeconds % 60);
    var remainingMinutes = Math.floor(ageInMinutes % 60);
    var remainingHours = Math.floor(ageInHours % 24);

    // Validar que la edad no sea 0
    if (ageInYears < 1) {
        document.getElementById('resultAgeCalculator').innerHTML = 'Por favor, ingrese una fecha de nacimiento válida (debe ser al menos un año antes de la fecha actual.';
        return;
    }

    document.getElementById('resultAgeCalculator').innerHTML = `<p>La edad es aproximadamente: ${Math.floor(ageInYears)} años, ${remainingHours} horas, ${remainingMinutes} minutos y ${remainingSeconds} segundos.</p>`;
}

function limpiarFormularioAgeCalculator() {
    document.getElementById('birthDate').value = '';
    document.getElementById('resultAgeCalculator').innerHTML = '';
}
