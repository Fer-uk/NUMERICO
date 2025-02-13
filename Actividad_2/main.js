import * as FN from './functions.js';
import * as MT from './methods.js';


const ctx = document.getElementById('myChart').getContext('2d');


//Funciones para obtener el arreglo de coordenadas y graficar
const funciones = {
    a: (a, b, pas) => FN.a(a, b, pas),  // x³ - 2x² - 5
    b: (a, b, pas) => FN.b(a, b, pas),  // x³ + 3x² - 1
    c: (a, b, pas) => FN.c(a, b, pas),  // x - cos(x)
    d: (a, b, pas) => FN.d(a, b, pas),
    e: (a, b, pas) => FN.e(a, b, pas)  // e^x + 2^(-x) + 2cos(x) - 6
};

//valores por default al seleccionar una funcion
const defaultFN = {
    // a   b   tol     iteraciones maximas
    a: [1, 3, 0.00001, 20],  // x³ - 2x² - 5
    b: [2.5, 3, 0.00001, 20],  // x³ + 3x² - 1
    c: [-1, 0 , 0.00001, 20],  // x - cos(x)
    d: [0, 1.5707, 0.0001, 20],
    e: [1.5, 2, 0.00001, 20]  // e^x + 2^(-x) + 2cos(x) - 6
};

//configuracion de la grafica
const config = {
    type: 'line',
    data: {},
    options: {
        animation: false,
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
        },
        plugins:{
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        xMin: 0, // Posición de la línea vertical
                        xMax: 0,
                        borderColor: 'black', // Color de la línea
                        borderWidth: 1, // Grosor de la línea
                    // borderDash: [5, 5], // Línea punteada (opcional)
                        label: {
                        content: 'x = 2',
                        enabled: true,
                        position: 'top'
                        }
                    },
                    line2: {
                        type: 'line',
                        yMin: 0, // Posición de la línea vertical
                        yMax: 0,
                        borderColor: 'black', // Color de la línea
                        borderWidth: 1, // Grosor de la línea
                    // borderDash: [5, 5], // Línea punteada (opcional)
                        label: {
                        content: 'x = 2',
                        enabled: true,
                        position: 'top'
                        }
                    },
                }
            },
            zoom: {
                pan: { enabled: true, mode: 'xy',modifierKey: 'ctrl'},
                zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'xy' }
            }
        }
    },
};

const myChart = new Chart(ctx, config);


const anim = document.getElementById("anim");
const btngraf = document.getElementById("graf");
const btnfn = document.getElementsByClassName('btnfn');
const btnmtd = document.getElementsByClassName('btnmtd');
const inpa = document.getElementById('ainput');
const inpb = document.getElementById('binput');
const inptol = document.getElementById('tol');
const intp0 = document.getElementById("p0");
const intp1 = document.getElementById('p1');
const intmop = document.getElementById('miter');
const lblraiz = document.getElementById('lblraiz');
let func;
let method;


Array.from(btnfn).forEach(boton => {
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
        inpa.value = defaultFN[this.id][0];
        inpb.value =  defaultFN[this.id][1];
        inptol.value =  defaultFN[this.id][2];
        intmop.value = defaultFN[this.id][3];

    });
});


Array.from(btnmtd).forEach(boton => {
    boton.addEventListener('click', function() {
        console.log('ID del botón presionado: '+ this.id);
        if (method){
            const butant = document.getElementById(method);
            butant.style.backgroundColor = "#fff";
            butant.style.color = "#0a0a0a";
        }
        method= this.id
        this.style.backgroundColor = "#0a0a0a";
        this.style.color = "#fff";
        if (this.id === 'btnPF' || this.id === 'btnNR'){
            intp1.style.display = "none";
        }else{
            intp1.style.display = "";
        }
        
    });
});

function graficar(gr){
    const funcion = funciones[gr]
    const { data, minY, maxY }  = funcion(parseFloat(inpa.value), parseFloat(inpb.value), 100);
    console.log("hola", data)
    myChart.data.datasets.push({
        label: document.getElementById(gr).textContent,
        data: data, // Y values
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
        pointRadius: 0
    });
    myChart.options.scales.y.min =minY //miny;
    myChart.options.scales.y.max =maxY//maxy;
    myChart.options.scales.x.min = parseFloat(inpa.value);
    myChart.options.scales.x.max = parseFloat(inpb.value);
    console.log("aquiiii", myChart.data)
    myChart.update()
}

function generarTabla(arreglo) {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = ""; // Limpiar tabla antes de generar nueva

    // Crear filas y celdas dinámicamente
    arreglo.forEach((fila, i) => {
        let tr = document.createElement("tr");

        fila.forEach(celda => {
            let elemento = i === 0 ? document.createElement("th") : document.createElement("td");
            elemento.textContent = celda;
            tr.appendChild(elemento);
        });

        tabla.appendChild(tr);
    });
}

btngraf.addEventListener('click',function() {
    myChart.data.datasets = []
    graficar(func);
});

anim.addEventListener('click', function() {
    const delay = 1000;   // Slower animation (increase for slower effect)
    
    if (method === 'btnPF'){
        

        //Grafiacar la funcion identidad
        const d = FN.identidad(parseFloat(inpa.value), parseFloat(inpb.value), 20)
        myChart.data.datasets.push({
            label: 'identidad',
            data: d, // Y values
            borderColor: 'green',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            pointRadius: 0
        });

        console.log("se vieneee")
        const g = FN.apf(parseFloat(inpa.value), parseFloat(inpb.value), 100);
        

        myChart.data.datasets.push({
            label: 'g(x)',
            data:g,  // Y values
            borderColor: 'red',
            borderWidth: 2,
            fill: false,
            pointRadius: 0
        });

        //Graficar la funcion despejada x=g(x)

        myChart.update()
        const {raiz, tabla } = MT.fixed_point(func, parseFloat(intp0.value), parseFloat(inptol.value), parseInt(intmop.value))
        generarTabla(tabla)
    }

    if (method === 'btnNR'){
        const {raiz, tabla } = MT.newton_r(func, parseFloat(intp0.value), parseFloat(inptol.value), parseInt(intmop.value))
        console.log(raiz)
        tabla.unshift(['i', 'x', 'xn', 'f(x)', 'Ea'])
        console.log(tabla)
        lblraiz.textContent = 'Raiz: ' + raiz;
        generarTabla(tabla)
        myChart.data.datasets.push({
            label: 'aprx' + parseFloat(tabla[1][1]),
            data: [{x:parseFloat(tabla[1][1]), y : 0}], // Y values
            borderColor: 'red',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
        });

        let x = 1;
       
        
        function animateChart() {
            if (x > tabla.length-1) return; // Stop animation

            myChart.data.datasets[1].label = 'aprx' + parseFloat(tabla[x][1]);
            myChart.data.datasets[1].data =  [{x:parseFloat(tabla[x][1]), y : 0}];
            myChart.update();

            x += 1; 

            setTimeout(animateChart, delay); // Add delay
        }

        animateChart(); // Start animation
    }
    
    
});