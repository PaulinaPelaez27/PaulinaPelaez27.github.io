function validarYCalcular() {
    var alturaInput = document.getElementById("height");
    var sombraInput = document.getElementById("shadowLength");

    var altura = parseFloat(alturaInput.value);
    var sombra = parseFloat(sombraInput.value);

    if (altura >= 1 && sombra >= 1 && altura <= 100 && sombra <= 100) {
        // Realizar el cálculo o cualquier otra lógica
        calcularAngulo();
    } else if (altura === 0 || sombra === 0) {
        document.getElementById('result').innerHTML = 'Por favor, ingrese valores mayores que 0 y menores de 100';
    } else {
        document.getElementById('result').innerHTML = 'Por favor, ingrese valores positivos para la altura y la longitud de la sombra.';
    }
}

function calcularAngulo() {
    const height = parseFloat(document.getElementById('height').value);
    const shadowLength = parseFloat(document.getElementById('shadowLength').value);
    const resultContainer = document.getElementById('result');

    if (!isNaN(height) && !isNaN(shadowLength)) {
        const angleInDegrees = Math.atan(height / shadowLength) * (180 / Math.PI);
        const degrees = Math.floor(angleInDegrees);
        const minutes = Math.floor((angleInDegrees - degrees) * 60);
        const seconds = Math.floor(((angleInDegrees - degrees) * 60 - minutes) * 60);

        const result = `Ángulo de incidencia del sol: ${degrees}° ${minutes}' ${seconds}"`;
        resultContainer.innerHTML = result;
    } else {
        resultContainer.innerHTML = 'Por favor, ingrese valores válidos para la altura y la longitud de la sombra.';
    }
}

function limpiarFormulario() {
    const resultContainer = document.getElementById('result');
    const angleForm = document.getElementById('angleForm');

    resultContainer.innerHTML = '';
    angleForm.reset();
}

//ejer 2
function calcularVolumenCilindrico() {
    const radius = parseFloat(document.getElementById('cylinderRadius').value);
    const height = parseFloat(document.getElementById('cylinderHeight').value);
    const resultContainer = document.getElementById('resultCilindrico');

    if (!isNaN(radius) && !isNaN(height) && radius > 0 && height > 0 && radius <= 100 && height <= 100) {
        const volume = Math.PI * Math.pow(radius, 2) * height;
        const result = `Volumen del depósito cilíndrico: ${volume.toFixed(2)} unidades cúbicas`;
        resultContainer.innerHTML = result;
    } else if (radius === 0 || height === 0) {
        resultContainer.innerHTML = 'Por favor, ingrese valores mayores que 0 y menores a 100';
    } else {
        resultContainer.innerHTML = 'Por favor, ingrese valores válidos para el radio y la altura.';
    }
}

function limpiarFormularioCilindrico() {
    const resultContainer = document.getElementById('resultCilindrico');
    const cylinderForm = document.getElementById('cylinderForm');

    resultContainer.innerHTML = '';
    cylinderForm.reset();
}

//ejer 3
function calcularGanancias() {
    const harvestedWeight = parseInt(document.getElementById('harvestedWeight').value);
    const pricePerKilo = parseFloat(document.getElementById('pricePerKilo').value);
    const resultContainer = document.getElementById('resultHarvest');

    if (!isNaN(harvestedWeight) && !isNaN(pricePerKilo) && harvestedWeight >= 0.25 && pricePerKilo >= 0.25 && harvestedWeight <= 1000 && pricePerKilo <= 100) {
        const ganancias = harvestedWeight * pricePerKilo;
        const result = `Ganancias por la cosecha: $${ganancias.toFixed(2)}`;
        resultContainer.innerHTML = result;
    } else if (harvestedWeight < 0.25 || pricePerKilo < 0.25) {
        resultContainer.innerHTML = 'Por favor, ingrese valores mayores que 0.25 para los kilos de grano y el precio por kilo.';
    } else {
        resultContainer.innerHTML = 'Por favor, ingrese valores válidos para los kilos de grano (hasta 1000 kilos) y el precio por kilo (hasta $100).';
    }
}

function limpiarFormularioHarvest() {
    const resultContainer = document.getElementById('resultHarvest');
    const harvestForm = document.getElementById('harvestForm');

    resultContainer.innerHTML = '';
    harvestForm.reset();
}

//ejer 4
function findSixthNumber() {
    // Obtener los valores de los cinco números
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const thirdNumber = document.getElementById('thirdNumber').value;
    const fourthNumber = document.getElementById('fourthNumber').value;
    const fifthNumber = document.getElementById('fifthNumber').value;

    // Validar que los números ingresados son de 5 cifras
    if (!validateInput(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber)) {
        document.getElementById('resultFindNumber').innerHTML = 'Por favor, ingrese números válidos de 5 cifras en todos los campos y positivos.';
        return;
    }

    // Calcular el sexto número
    const sixthNumber = calculateSixthNumber(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);

    // Mostrar el resultado
    document.getElementById('resultFindNumber').innerHTML = `<p>El sexto número es: ${sixthNumber}</p>`;
}

function validateInput(...numbers) {
    return numbers.every(number => /^\d{5}$/.test(number));
}

function calculateSixthNumber(...numbers) {
    const resultArray = [
        numbers[0][4], // último número de la primera cifra
        numbers[1][2], // tercero de la segunda cifra
        numbers[2][0], // primero de la tercera cifra
        numbers[3][2], // tercero de la cuarta cifra
        numbers[4][4], // quinto de la quinta cifra
    ];

    return resultArray.join('');
}

function limpiarFormularioFindNumber() {
    // Limpiar los campos del formulario y el resultado
    document.getElementById('firstNumber').value = '';
    document.getElementById('secondNumber').value = '';
    document.getElementById('thirdNumber').value = '';
    document.getElementById('fourthNumber').value = '';
    document.getElementById('fifthNumber').value = '';
    document.getElementById('resultFindNumber').innerHTML = '';
}
//ejer 5


function calcularResistenciaEquivalente() {
    var resistencia1 = parseFloat(document.getElementById("resistencia1").value);
    var resistencia2 = parseFloat(document.getElementById("resistencia2").value);
    var resultFContainer = document.getElementById('resultF');

    if (isNaN(resistencia1) || isNaN(resistencia2)) {
        resultFContainer.innerHTML = 'Por favor, ingrese valores numéricos para las resistencias.';
        return;
    }
    
    if (resistencia1 <= 0 || resistencia2 <= 0) {
        resultFContainer.innerHTML = 'Por favor, ingrese valores positivos mayores a 0 para las resistencias.';
        return;
    }
    
    if (resistencia1 > 1000 || resistencia2 > 1000) {
        resultFContainer.innerHTML = 'Por favor, ingrese valores menores o iguales a 1000 para las resistencias.';
        return;
    }
    

    var resistenciaEquivalente = (resistencia1 * resistencia2) / (resistencia1 + resistencia2);

    document.getElementById("resistenciaEquivalente").textContent = resistenciaEquivalente.toFixed(2) + " ohmios";
    resultFContainer.innerHTML = ''; // Limpiar el mensaje en caso de que haya un valor válido.
}

function limpiarCampos() {
    document.getElementById("resistencia1").value = "";
    document.getElementById("resistencia2").value = "";
    document.getElementById("resistenciaEquivalente").textContent = "";
    document.getElementById('resultF').innerHTML = '';
}
