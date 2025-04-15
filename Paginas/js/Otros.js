//ejer 16
function formatText(command) {
    document.execCommand(command, false, null);
}

function alignText(align) {
    document.execCommand('justify' + align, false, null);
}

function changeFontSize() {
    const fontSize = document.getElementById('fontSize').value;
    document.getElementById('editorContent').style.fontSize = fontSize + 'px';
}

function changeFontColor() {
    const fontColor = document.getElementById('fontColor').value;
    document.execCommand('foreColor', false, fontColor);
}


//ejer 17
function sumarNumeros() {
    const inputString = document.getElementById('inputString').value;
    const regex = /-?\d+/g; // Expresión regular para encontrar números (positivos o negativos) en la cadena
    let match;
    let suma = 0;

    while ((match = regex.exec(inputString)) !== null) {
        suma += parseInt(match[0], 10);
    }

    document.getElementById('resultSumNumbers').innerHTML = `<p>La suma de los números en la cadena es: ${suma}</p>`;
}

function limpiarFormularioSumNumbers() {
    document.getElementById('inputString').value = '';
    document.getElementById('resultSumNumbers').innerHTML = '';
}

//ejer 18
function calcularPropiedades() {
    const inputText = document.getElementById('matrixInput').value.trim();

    // Expresión regular para encontrar números enteros en la matriz
    const regex = /-?\d+/g;

    // Validar que solo se ingresen números enteros en la matriz
    if (!inputText.match(regex)) {
        alert('Por favor, ingrese solo números enteros en la matriz.');
        return;
    }

    let match;
    let numeros = [];
    let sumaTotal = 0;
    let sumaColumnasPares = 0;
    let positivos = 0;
    let negativos = 0;
    let neutros = 0;

    while ((match = regex.exec(inputText)) !== null) {
        const num = parseInt(match[0], 10); // Convertir a entero
        numeros.push(num);
        sumaTotal += num;

        if (num > 0) {
            positivos++;
        } else if (num < 0) {
            negativos++;
        } else {
            neutros++;
        }
    }

    if (numeros.length !== 9) {
        alert('Revisar cuantos terminos hay, se deben ingresarse 9 números. Y tienen que ser enteros');
        return;
    }

    // Calcular suma de columnas de orden par
    for (let i = 1; i <= 3; i++) {
        if (i % 2 === 0) {
            sumaColumnasPares += numeros[i - 1] + numeros[i + 2] + numeros[i + 5];
        }
    }

    const resultText = document.getElementById('resultMatrixOperations');
    resultText.innerHTML = `
        <p>Matriz ingresada:</p>
        <table>
            <tr>
                <td>${numeros[0]}</td>
                <td>${numeros[1]}</td>
                <td>${numeros[2]}</td>
            </tr>
            <tr>
                <td>${numeros[3]}</td>
                <td>${numeros[4]}</td>
                <td>${numeros[5]}</td>
            </tr>
            <tr>
                <td>${numeros[6]}</td>
                <td>${numeros[7]}</td>
                <td>${numeros[8]}</td>
            </tr>
        </table>
        <p>Cantidad de elementos positivos: ${positivos}</p>
        <p>Cantidad de elementos negativos: ${negativos}</p>
        <p>Cantidad de elementos neutros: ${neutros}</p>
        <p>Suma de todos los elementos: ${sumaTotal}</p>
        <p>Suma de elementos en columnas de orden par: ${sumaColumnasPares}</p>
    `;

    const resultModal = new bootstrap.Modal(document.getElementById('matrixOperationsModal'));
    resultModal.show();
}

function limpiarFormularioMatrixOperations() {
    document.getElementById('resultMatrixOperations').innerHTML = '';
    document.getElementById('matrixInput').value = '';
}
