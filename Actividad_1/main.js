//Crear los arreglos con las cordenadas de los puntos a graficar de las funciones originales
function ex(a, b, pasos = 5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.exp(x) };  // Calcula e^x
    });
    console.log(data)
    return data;
}

function exT(a, b, g, pasos = 5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYex(x, g) };  // Calcula e^x
    });
    return data;
}

function nex(a, b, pasos = 5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.exp(-1*x) };  // Calcula e^x
    });
    return data;
}

function nexT(a, b,g, pasos = 5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYnex(x, g) };  // Calcula e^x
    });
    return data;
}

function sen(a,b,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); 
        return { x: x, y: Math.sin(x) }; 
    });
    return data;
}

function senT(a,b,g,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); 
        return { x: x, y:TAYsen(x,g) }; 
    });
    return data;
}

function cos(a,b,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.cos(x) };  // Calcula e^x
    });
    return data;
}

function cosT(a,b,g,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYcos(x, g) };  // Calcula e^x
    });
    return data;
}

function senh(a,b,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.sinh(x) };  // Calcula e^x
    });
    return data;
}

function senhT(a,b,g,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYsenh(x, g) };  // Calcula e^x
    });
    return data;
}

function cosh(a,b,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.cosh(x) };  // Calcula e^x
    });
    return data;
}

function coshT(a,b,g,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYcosh(x,g) };  // Calcula e^x
    });
    return data;
}

function ln(a,b,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.log(1+x) };  // Calcula e^x
    });
    return data;
}

function lnT(a,b,g,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYln(x,g) };  // Calcula e^x
    });
    return data;
}



// Función que calcula el factorial de un número
function factorial(n) {
if (n === 0 || n === 1) return 1;
let result = 1;
for (let i = 2; i <= n; i++) {
    result *= i;
}
return result;
}

//Calculo de un opunto x de un plinomio de grado g
function TAYex(x, g){
    let y=0;
    for (let i = 0; i <= g; i++){
        y= y + Math.pow(x,i)/factorial(i)
    }
    return y
}

function TAYnex(x, g){
    let y=0;
    for (let i = 0; i <= g; i++){
        y= y + (Math.pow(x,i)/factorial(i) * (Math.pow(-1, i)))
    }
    return y
}

function TAYsen(x, g){
    let y=0;
    for (let i = 0; i <= g; i++){
        y= y +( Math.pow(x,2*i +1)/factorial(2*i +1) * Math.pow(-1, i))
    }
    return y
}

function TAYcos(x, g){
    let y=0;
    for (let i = 0; i <= g; i++){
        y= y +( Math.pow(x,2*i)/factorial(2*i) * Math.pow(-1, i))
    }
    return y
}

function TAYsenh(x, g){
    let y=0;
    //Agregar funcion de senh
    return y
}

function TAYcosh(x, g){
    let y=0;
    //Agregar funcion de cosh
    return y
}

function TAYln(x, g){
    let y=0;
    //Agregar funcion de cosh
    return y
}

//Regresa la tabulacion respecto a una funcion
function dataFun(fun, a, b, g, pasos){
        switch (fun) {
            case 'exp':
            data = ex(a,b,pasos)
            break;
            case 'nexp':
                data = nex(a,b,pasos)
            break;
            case 'sen':
                data = sen(a,b,pasos)
            break;
            case 'cos':
                data = cos(a,b,pasos)
            break;
            case 'senh':
                data = senh(a,b,pasos)
            break;
            case 'cosh':
                data = cosh(a,b,pasos)
            break;
            case 'ln':
                data = ln(-a,b,pasos)
            break;
            case 'expT':
                data = exT(a,b,g,pasos)
            break;
            case 'nexpT':
                data = nexT(a,b,g,pasos)
            break;
            case 'senT':
                data = senT(a,b,g,pasos)
            break;
            case 'cosT':
                data = cosT(a,b,g,pasos)
            break;
            case 'senhT':
                data = senhT(a,b,g,pasos)
            break;
            case 'coshT':
                data = coshT(a,b,g,pasos)
            break;
            case 'lnT':
                data = lnT(a,b,g,pasos)
            break;
            default:
            
        }
    
    return data;
}

//Para crear otro dataset (formato para graficar)
function newDataSet(data, lbl, tens, bc='rgba(54, 162, 235, 1)', bk='rgba(54, 162, 235, 0.2)'){
    const newdata = {
        label: lbl,
        data: data,
        borderColor: bc,
        backgroundColor: bk,
        showLine: true,
        tension: tens
    }
    return newdata;
}

//Elementos necesarios para el funcionamiento de la pagina
const dataYEqualsX = []
const sliderN = document.getElementById('sliderN');
const sliderVN = document.getElementById('sliderVN');
const botones = document.getElementsByClassName('but');
let func;
let a=-2;
let b=4;
let grades;

const config = {
    type: 'line',
    data: {
        datasets: [
            {
                label: 'Selecciona una funcion',
                data: dataYEqualsX,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                showLine: true, // Conectar los puntos
                tension: 0
            },
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'x'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'y'
                }
            }
        }
    }
};
// Renderizar el gráfico
const ctx = document.getElementById('lineChart').getContext('2d');
let C = new Chart(ctx, config);

//Pedir grados
function inputGrades() {
    // Solicitar al usuario ingresar números separados por espacios
    let input = prompt("Ingresa los grados separados por espacios:");
    
    if (input != null && input != "") {
     
      let numeros = input.split(" ").map(Number); 
      // Verificar que todos los elementos sean números enteros
      if (numeros.every(num => Number.isInteger(num))) {
        
        return numeros;
      } else {
        alert("Por favor, ingresa solo números válidos.");
        return NaN;
      }
    } else {
      alert("No se proporcionaron números.");
      return NaN;
    }
    
}

//Actualizar los valores de n en el polinomio
function updateSliderValueN() {
    const value = sliderN.value;
    sliderVN.textContent = value;
    for (let j=1; j<=C.data.datasets.length; j++){
        C.data.datasets.splice(j); 
    }
    for (let i=0; i<grades.length; i++){
        C.data.datasets.push(newDataSet(data=dataFun(fun=func+'T' ,a=a, b=b, g=grades[i], pasos=parseFloat(value)), lbl='grado:'+grades[i], tens=0, bc='rgba(160, 241, 149, 0.9)', bk='rgba(160, 241, 149, 0.9)'))
    }
    C.update();
}
sliderN.addEventListener('input', updateSliderValueN);


Array.from(botones).forEach(boton => {
    boton.addEventListener('click', function() {
        console.log(`ID del botón presionado: ${this.id}`);
        //Pedir datos
        a =  parseFloat(prompt("Ingresa el limite inferior del intervalo:"));
        b =  parseFloat(prompt("Ingresa el limite superior del intervalo:"));
        grades = inputGrades()

        //graficar funcion original
        func = this.id
        C.data.datasets = [];
        data = dataFun(fun=func, a=a, b=b, g=NaN, pasos=35);
        dataSet = newDataSet(data, func, 0)
        C.data.datasets.push(dataSet);

        //graficar funcion con apoximaciones
        for (i=0; i<grades.length; i++){
            //Codigo para los datos
            C.data.datasets.push(newDataSet(data=dataFun(fun=func+'T' ,a=a, b=b, g=grades[i], pasos=parseFloat(sliderN.value)), lbl= 'grado:'+grades[i], tens=0, bc='rgba(160, 241, 149, 0.9)', bk='rgba(160, 241, 149, 0.9)'))
        }

        
        C.update();
    });
});
