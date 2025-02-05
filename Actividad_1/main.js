//Crear los arreglos con las cordenadas de los puntos a graficar de las funciones originales
function ex(a, b, pasos = 5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.exp(x) };  // Calcula e^x
    });
    
    // Extract only y values
    const yValues = data.map(point => point.y);

    // Find the min and max y values
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

function exT(a, b, g, pasos = 5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYex(x, g) };  // Calcula e^x a traves del polinomio de Taylor
    });
    return data;
}

function nex(a, b, pasos = 5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.exp(-1*x) };  // Calcula e^-x
    });
    // Extract only y values
    const yValues = data.map(point => point.y);

    // Find the min and max y values
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

function nexT(a, b,g, pasos = 5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYnex(x, g) };  // Calcula e^-x por taylor
    });
    return data;
}

function sen(a,b,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); //calcula sen
        return { x: x, y: Math.sin(x) }; 
    });
    // Extract only y values
    const yValues = data.map(point => point.y);

    // Find the min and max y values
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

function senT(a,b,g,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos);  //calcula sen por taylor
        return { x: x, y:TAYsen(x,g) }; 
    });
    return data;
}

function cos(a,b,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.cos(x) };  // Calcula cos
    });
    // Extract only y values
    const yValues = data.map(point => point.y);

    // Find the min and max y values
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

function cosT(a,b,g,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYcos(x, g) };  // Calcula cos por taylor
    });
    return data;
}

function senh(a,b,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.sinh(x) };  // Calcula senh
    });
    // Extract only y values
    const yValues = data.map(point => point.y);

    // Find the min and max y values
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

function senhT(a,b,g,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYsenh(x, g) };  // Calcula senh por taylor
    });
    return data;
}

function cosh(a,b,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.cosh(x) };  // Calcula cosh
    });
    // Extract only y values
    const yValues = data.map(point => point.y);

    // Find the min and max y values
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

function coshT(a,b,g,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYcosh(x,g) };  // Calcula cosh por taylor
    });
    return data;
}

function ln(a,b,pasos=5){
    if (a == -1){
        a=-0.9999999
    }
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.log(1+x) };  // Calcula ln
    });
    // Extract only y values
    const yValues = data.map(point => point.y);

    // Find the min and max y values
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

function lnT(a,b,g,pasos=5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYln(x,g) };  // Calcula ln por taylor
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
    for (let i = 0; i <= g; i++){
        y= y +( Math.pow(x,2*i+1)/factorial(2*i+1))
    }
    return y
}

function TAYcosh(x, g){
    let y=0;
    for (let i = 0; i <= g; i++){
        y= y +( Math.pow(x,2*i)/factorial(2*i))
    }
    return y
}

function TAYln(x, g){
    let y=0;
    
    if(g!=0){
        for (let i = 1; i <= g; i++){
            y= y +( (Math.pow(-1, i+1)*Math.pow(x,i))/(i))
        }
    }
   
    
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
            data = ln(a,b,pasos)
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
        break; 
    }
    return data;
}


//Elementos necesarios para el funcionamiento de la pagina
const dataYEqualsX = []
const sliderN = document.getElementById('sliderN');
const botones = document.getElementsByClassName('but');
let randomKey;
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
                borderColor: 'rgba(235, 0, 0, 1)',
                backgroundColor: 'rgba(235, 0, 0, 1)',
                showLine: true, // Conectar los puntos
                tension: 0
            },
           
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                min: -1,  
                max: 1,   
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'x'
                },
                
            },
            y: {
                min: -1,  
                max: 1,   
                title: {
                    display: true,
                    text: 'y'
                },
            }
        }
    }
};
// Renderizar el gráfico
const ctx = document.getElementById('lineChart').getContext('2d');
let C = new Chart(ctx, config);

// Función para generar un color más oscuro basado en el índice de grado
function generateColor(baseColor, factor) {
    let [r, g, b] = baseColor; // Extraer componentes RGB
    r = Math.max(0, r - factor * 20); 
    g = Math.max(0, g - factor * 20); 
    b = Math.max(0, b - factor * 20);
    return 'rgba(' + r+ ','+g + ','+b + ', 1)';
}

// Diccionario de colores base para cada color elegido
const colorMap = {
    verde: [138, 255, 15],
    morado: [150, 80, 190],
    azul: [54, 162, 235],
    rosa: [255, 105, 180],
    gris: [128, 128, 128],
    marrón: [139, 69, 19],
    turquesa: [64, 224, 208],
    dorado: [255, 215, 0],
    rojo: [235, 0, 0],
};




// Para crear otro dataset (formato para graficar)
function newDataSet(data, lbl, tens, baseColor, factor) {
    const darkenedColor = generateColor(colorMap[baseColor], factor);
   
    return {
        label: lbl,
        data: data,
        borderColor: darkenedColor,
        backgroundColor: darkenedColor,
        showLine: true,
        tension: tens
    };
}

// Modificar la actualización del gráfico para incluir la variación de color
function updateSliderValueN() {
    const value = sliderN.value;
    C.data.datasets = []; // Limpiar anteriores aproximaciones
    const colorBase = 'rojo'; // Color base para la función original
    const { data, minY, maxY }  = dataFun(func, a, b, NaN, parseFloat(value));
    C.options.scales.y.min = minY - Math.abs((minY-maxY)/2*0.3);
    C.options.scales.y.max = maxY + Math.abs((minY-maxY)/2*0.3);
    C.options.scales.x.min = a - Math.abs((a-b)/2*0.2);
    C.options.scales.x.max = b + Math.abs((a-b)/2*0.2);
    C.data.datasets.push(newDataSet(data, func, 0, colorBase, 0));
    for (let i = 0; i < grades.length; i++) {
        C.data.datasets.push(newDataSet(
            dataFun(func + 'T', a, b, grades[i], parseFloat(value)), 
            'grado: ' + grades[i], 
            0, 
            String(randomKey), 
            i
        ));
    }
    C.update();
}

const graficarBtn = document.getElementById('grfbtn');
const aInput = document.getElementById('ainput');
const bInput = document.getElementById('binput');
const gradosInput = document.getElementById('gradosinp');

Array.from(botones).forEach(boton => {
    boton.addEventListener('click', function() {
        console.log('ID del botón presionado: '+ this.id);
        if (func){
            const butant = document.getElementById(func);
            butant.style.backgroundColor = "#fff";
            butant.style.color = "#0a0a0a";
        }
        func= this.id
        this.style.backgroundColor = "#0a0a0a";
        this.style.color = "#fff";
    });
});
/*
Funcion anterior para graficar al presionar un boton de aqui puedes sacar el codigo para graficar*/

graficarBtn.addEventListener('click', function() {
        a = parseFloat(aInput.value);
        b = parseFloat(bInput.value);

        if (isNaN(a) || isNaN(b)) {
            alert("Por favor, ingresa valores válidos para a y b.");
            return;
        }
        let numeros = gradosInput.value.split(" ").map(Number);
        if (gradosInput.value != null && gradosInput.value != "") {
            if (numeros.every(num => Number.isInteger(num))) {
              numeros.sort((a, b) => a - b);
            } else {
              alert("Por favor, ingresa solo números válidos.");
            }
          } else {
            alert("No se proporcionaron números.");
          }
        grades = numeros;

        
        C.data.datasets = [];

        const colorBase = 'rojo'; // Color base para la función original
        const { data, minY, maxY }  = dataFun(func, a, b, NaN, parseFloat(sliderN.value));
        C.options.scales.y.min = minY - Math.abs((minY-maxY)/2*0.3);
        C.options.scales.y.max = maxY + Math.abs((minY-maxY)/2*0.3);
        C.options.scales.x.min = a - Math.abs((a-b)/2*0.2);
        C.options.scales.x.max = b + Math.abs((a-b)/2*0.2);

        C.data.datasets.push(newDataSet(data, func, 0, colorBase, 0));

        const keys = Object.keys(colorMap);
        // Seleccionar una clave aleatoria
        randomKey = keys[Math.floor(Math.random() * 8)];
       
       
        for (let i = 0; i < grades.length; i++) {
           
            C.data.datasets.push(newDataSet(
                dataFun(func + 'T', a, b, grades[i], parseFloat(sliderN.value)), 
                'grado: ' + grades[i], 
                0, 
                String(randomKey), 
                i
            ));
        }
        C.update();
    });

