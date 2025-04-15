//ejer 11
function validateNumRows() {
    const resultContainer = document.getElementById('resul');
    var numRowsInput = document.getElementById('numRows');
    var numRows = parseInt(numRowsInput.value);

    if (numRows < 1 || isNaN(numRows) || !Number.isInteger(numRows)) {
        resultContainer.innerHTML = 'Por favor, ingrese un valor entero positivo mayor o igual a 1 y menor o igual a 30.';
    } else if (numRows > 30) {
        resultContainer.innerHTML = 'Por favor, ingrese un número entero menor o igual a 30.';
    } else {
        resultContainer.innerHTML = '';
    }

    // Asegurarse de que el valor esté dentro del rango permitido
    numRowsInput.value = Math.min(30, Math.max(1, numRows));
}


function imprimirPatron() {
    var numRows = parseInt(document.getElementById('numRows').value);
    var patternResult = '';

    for (let i = 1; i <= numRows; i++) {
        // Agrega espacios en blanco al principio de cada línea para crear la forma de triángulo
        for (let k = numRows - i; k > 0; k--) {
            patternResult += '&nbsp;';
        }
        // Agrega asteriscos a la línea actual
        for (let j = 1; j <= (2 * i - 1); j++) {
            patternResult += '*';
        }
        // Agrega un salto de línea al final de cada línea
        patternResult += '<br>';
    }

    document.getElementById('resultPatternPrinter').innerHTML = patternResult;
}

function limpiarFormularioPatternPrinter() {
    document.getElementById('numRows').value = '';
    document.getElementById('resultPatternPrinter').innerHTML = '';
    document.getElementById('resul').innerHTML = '';
}


//ejer 12

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function verificarAdivinanza() {
    const intentoUsuario = document.getElementById('guessedNumber').value.trim(); // Obtener el valor del campo sin espacios

    if (intentoUsuario.match(/^\d+$/)) { // Verificar si el valor es un número entero positivo
        const numeroEntero = parseInt(intentoUsuario);
        if (numeroEntero >= 1 && numeroEntero <= 10) {
            intentos++;

            if (numeroEntero === numeroSecreto) {
                document.getElementById('resultGuessNumber').innerHTML = `<p>¡Felicidades! Adivinaste el número en ${intentos} intentos.</p>`;
            } else if (numeroEntero < numeroSecreto) {
                document.getElementById('resultGuessNumber').innerHTML = '<p>El número es mayor. Intenta de nuevo.</p>';
            } else {
                document.getElementById('resultGuessNumber').innerHTML = '<p>El número es menor. Intenta de nuevo.</p>';
            }
        } else {
            document.getElementById('resultGuessNumber').innerHTML = '<p>Por favor, ingresa un número entero válido entre 1 y 10.</p>';
        }
    } else {
        document.getElementById('resultGuessNumber').innerHTML = '<p>Por favor, ingresa un número entero válido entre 1 y 10.</p>';
    }
}

function limpiarFormularioGuessNumber() {
    // Reinicia el juego generando un nuevo número secreto y reseteando intentos
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;

    document.getElementById('guessedNumber').value = '';
    document.getElementById('resultGuessNumber').innerHTML = '';
}

//ejer 13
function factorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

function calcularSerie() {
    const txtNum = document.getElementById('txtNum');
    const lblRespModal = document.getElementById('lblRespModal');

    
        const n = parseInt(txtNum.value);

        if (!isNaN(n) && n > 0) {
            let numerador = 1;
            let denominador = 2;
            let resultado = 0;

            for (let i = 1; i <= n; i++) {
                if (i % 2 === 0) {
                    resultado += -(factorial(numerador) / Math.pow(denominador, i));
                    numerador++;
                    denominador += 3;
                } else {
                    resultado += (Math.pow(numerador, i) / factorial(denominador));
                    numerador += 3;
                    denominador++;
                }
            }

            lblRespModal.innerHTML = `<p>Resultado: ${resultado}</p>`;
            cerrarModal();
            txtNum.value = '';
        } else {
            
            document.getElementById('resultSerie').innerHTML = 'Por favor, ingresa un número válido mayor que 0.';
            txtNum.value = '';
        }
   
}

function limpiarFormulario() {
    document.getElementById('txtNum').value = '';
    document.getElementById('lblRespModal').innerHTML = '';
    document.getElementById('resulSerie').innerHTML = '';
}

//ejer 14
function calcularPi() {
    let pi = 0;
    let signo = 1;

    for (let i = 1; i <= 99; i += 2) {
        pi += signo * (4 / i);
        signo *= -1; // Cambia el signo en cada término
    }

    // Mostrar el resultado en el HTML
    document.getElementById('resultPiCalculator').innerHTML = `<p>El valor aproximado de π es: ${pi}</p>`;
}

function limpiarFormularioPiCalculator() {
    // Limpiar el resultado y el campo si fuera necesario
    document.getElementById('resultPiCalculator').innerHTML = '';
}

//ejer 15

function generarFibonacci() {
    const numTerms = parseInt(document.getElementById('numTerms').value);

    if (!isNaN(numTerms) && numTerms > 0 && numTerms <= 100 && Number.isInteger(numTerms)) {
        let fibonacciSeries = [0, 1];

        if (numTerms === 1) {
            fibonacciSeries = [0];
        } else if (numTerms === 2) {
            fibonacciSeries = [0, 1];
        } else {
            for (let i = 2; i < numTerms; i++) {
                fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
            }
        }

        document.getElementById('resultFibonacci').innerHTML = `<p>Serie de Fibonacci (${numTerms} términos): ${fibonacciSeries.join(', ')}</p>`;
    } else {
        document.getElementById('resultFibonacci').innerHTML = '<p>Por favor, ingresa un número entero válido entre 1 y 100.</p>';
    }
}

function limpiarFormularioFibonacci() {
    document.getElementById('numTerms').value = '';
    document.getElementById('resultFibonacci').innerHTML = '';
}
