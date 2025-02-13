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

const Gfunciones = {
    a: (a, b, pas) => FN.apf(a, b, pas),  // (10-4x² )^1/3
    b: (a, b, pas) => FN.bpf(a, b, pas),  // ( 2x² + 5)^(1/3)
    c: (a, b, pas) => FN.cpf(a, b, pas),   // (1-3x² )^1/3
    d: (a, b, pas) => FN.dpf(a, b, pas), //cos(x)
    e: (a, b, pas) => FN.epf(a, b, pas)  // e^x + 2^(-x) + 2cos(x) - 6 + x
}

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
//rline, gline, tline son lineas de apoyo para las animaciones
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
                    
                        label: {
                        content: 'x = 2',
                        enabled: true,
                        position: 'top'
                        }
                    },
                    rline: { //linea de apoyo
                        type: 'line',
                        xMin: -100000, // Posición de la línea vertical
                        xMax: -100000,
                        yMin: NaN,
                        yMax: NaN,
                        borderColor: 'rgb(162, 0, 255)', // Color de la línea
                        borderWidth: 1, // Grosor de la línea
                        borderDash: [5, 5], // Línea punteada (opcional)
                        label: {
                        content: 'x = 2',
                        enabled: true,
                        position: 'top'
                        }
                    },
                    gline: { //linea de apoyo
                        type: 'line',
                        xMin: -100000, // Posición de la línea vertical
                        xMax: -100000,
                        yMin: NaN,
                        yMax: NaN,
                        borderColor: 'rgb(162, 0, 255)', // Color de la línea
                        borderWidth: 1, // Grosor de la línea
                        borderDash: [5, 5], // Línea punteada (opcional)
                        label: {
                        content: 'x = 2',
                        enabled: true,
                        position: 'top'
                        }
                    },
                    tline: { //linea de apoyo
                        type: 'line',
                        xMin: -100000, // Posición de la línea vertical
                        xMax: -100000,
                        yMin: NaN,
                        yMax: NaN,
                        borderColor: 'rgb(162, 0, 255)', // Color de la línea
                        borderWidth: 1, // Grosor de la línea
                        borderDash: [5, 5], // Línea punteada (opcional)
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

//Reset grafics
function resetF(){
    myChart.data.datasets = []
    myChart.options.plugins.annotation.annotations['rline'].xMin = -100000;
    myChart.options.plugins.annotation.annotations['rline'].xMax = -100000;
    myChart.options.plugins.annotation.annotations['rline'].yMin = NaN;
    myChart.options.plugins.annotation.annotations['rline'].yMax = NaN;
    myChart.options.plugins.annotation.annotations['gline'].xMin = -100000;
    myChart.options.plugins.annotation.annotations['gline'].xMax = -100000;
    myChart.options.plugins.annotation.annotations['gline'].yMin = NaN;
    myChart.options.plugins.annotation.annotations['gline'].yMax = NaN;
    myChart.options.plugins.annotation.annotations['tline'].xMin = -100000;
    myChart.options.plugins.annotation.annotations['tline'].xMax = -100000;
    myChart.options.plugins.annotation.annotations['tline'].yMin = NaN;
    myChart.options.plugins.annotation.annotations['tline'].yMax = NaN;
}

function graphHorizontalLine(line, x, x1, y){
    myChart.options.plugins.annotation.annotations[line].yMin =y;
    myChart.options.plugins.annotation.annotations[line].yMax =y;
    if(x<x1){
        myChart.options.plugins.annotation.annotations[line].xMin =x;
        myChart.options.plugins.annotation.annotations[line].xMax =x1; 
    }else{
        myChart.options.plugins.annotation.annotations[line].xMin =x1;
        myChart.options.plugins.annotation.annotations[line].xMax =x; 
    }
}

function graphVerticalLine(line, y, y1, x){
    myChart.options.plugins.annotation.annotations[line].xMin =x;
    myChart.options.plugins.annotation.annotations[line].xMax =x;
    if(y<y1){
        myChart.options.plugins.annotation.annotations[line].yMin =y;
        myChart.options.plugins.annotation.annotations[line].yMax =y1; 
    }else{
        myChart.options.plugins.annotation.annotations[line].yMin =y1;
        myChart.options.plugins.annotation.annotations[line].yMax =y; 
    }
      
}

function actlblRaiz(er, raiz, tot, x){
    console.log(er, parseFloat(inptol.value), x, tot)
    if (Math.abs(er)>parseFloat(inptol.value) && x==tot){
        lblraiz.textContent = 'Raiz: sin resultado';
        console.log("ENTRO");
    }else{
        lblraiz.textContent = 'Raiz: ' + raiz;
        console.log('raiz')
    }
}

const myChart = new Chart(ctx, config);

//Variables para el manejo del programa
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
let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderV");
const lblerr = document.getElementById('lblerr');
let func;
let method;
let tablaG;
let lineheight;


Array.from(btnfn).forEach(boton => {
    boton.addEventListener('click', function() {
        console.log('ID del botón presionado: '+ this.id);
        if (func){
            const butant = document.getElementById(func);
            butant.style.backgroundColor = ' rgb(141, 209, 38)';
            
        }
        func= this.id
        this.style.backgroundColor = "#0a0a0a";
       
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
            butant.style.backgroundColor = " rgb(141, 209, 38)";
           
        }
        method= this.id
        this.style.backgroundColor = "#0a0a0a";
       
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
    //LIMPIAR GRAFICA
    resetF();
    graficar(func);
    if (method === 'btnPF'){
        const {raiz, tabla } = MT.fixed_point(func, parseFloat(intp0.value), parseFloat(inptol.value), parseInt(intmop.value))
        tabla.unshift(['i', 'p', 'p1', 'g(x)', 'f(x)', 'Ea']);
        tablaG=tabla;

        generarTabla(tabla)
        slider.max = tabla.length-1;
        //Agregar el punto que ira animando atravez del tiempo
        myChart.data.datasets.push({
            label: 'x' + parseFloat(tabla[1][1]),
            data: [{x:parseFloat(tabla[1][1]), y : 0}], // Y values
            borderColor: 'red',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
        });
        //Graficar xn
        myChart.data.datasets.push({
            label: 'xn',
            data: [], // Y values
            borderColor: 'rgb(0, 255, 255)',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
        });
        
        //Graficar xn
        myChart.data.datasets.push({
            label: 'g(x)',
            data: [], // Y values
            borderColor: 'rgb(234, 0, 255)',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
        });
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

        //Graficar la funcion despejada x=g(x)
        const g =Gfunciones[func](parseFloat(inpa.value), parseFloat(inpb.value), 100) 
        myChart.data.datasets.push({
            label: 'g(x)',
            data:g,  // Y values
            borderColor: 'red',
            borderWidth: 2,
            fill: false,
            pointRadius: 0
        });
        const x = slider.value;
         
        //Actualizar labels
        
        actlblRaiz(tablaG[x][5], tablaG[x][1], tablaG.length-1, x)
        lblerr.textContent = 'Error absoluto: ' + tablaG[x][5];
        
        //Actualizar la posicion del punto
        myChart.data.datasets[1].label = 'x = ' + parseFloat(tablaG[x][1]).toFixed(5);
        myChart.data.datasets[1].data =  [{x:parseFloat(tablaG[x][1]), y : 0}];
        myChart.data.datasets[2].label = 'xn = ' + parseFloat(tablaG[x][2]).toFixed(5);
        myChart.data.datasets[2].data =  [{x:parseFloat(tablaG[x][2]), y : 0}];
        myChart.data.datasets[3].label= 'g(x) =' + parseFloat(tablaG[x][3]).toFixed(5)
        myChart.data.datasets[3].data=[{x:parseFloat(tablaG[x][1]), y : parseFloat(tablaG[x][3])},]

        //Linea de p a g(x) vertical rline
        graphVerticalLine('rline',0, parseFloat(tablaG[x][3]), parseFloat(tablaG[x][1]) );

        //Linea de g(x) a identidad horizontal gline
        graphHorizontalLine('gline', parseFloat(tablaG[x][1]), parseFloat(tablaG[x][2]), parseFloat(tablaG[x][2]));
        
        
        //Linea de identidad a p1 vertical tline
        graphVerticalLine('tline',0, parseFloat(tablaG[x][3]), parseFloat(tablaG[x][2]) );

    
        myChart.update();
    }
});

anim.addEventListener('click', function() {
    const delay = 1000;   // Slower animation (increase for slower effect)
    resetF();
    graficar(func);
    if (method === 'btnPF'){
        const {raiz, tabla } = MT.fixed_point(func, parseFloat(intp0.value), parseFloat(inptol.value), parseInt(intmop.value))
        tabla.unshift(['i', 'p', 'p1', 'g(x)', 'f(x)', 'Ea']);
        tablaG=tabla;

        generarTabla(tabla)
        slider.max = tabla.length-1;
        //Agregar el punto que ira animando atravez del tiempo
        myChart.data.datasets.push({
            label: 'x' + parseFloat(tabla[1][1]),
            data: [{x:parseFloat(tabla[1][1]), y : 0}], // Y values
            borderColor: 'red',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
        });
        //Graficar xn
        myChart.data.datasets.push({
            label: 'xn',
            data: [], // Y values
            borderColor: 'rgb(0, 255, 255)',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
        });
        
        //Graficar xn
        myChart.data.datasets.push({
            label: 'g(x)',
            data: [], // Y values
            borderColor: 'rgb(234, 0, 255)',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
        });
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

        //Graficar la funcion despejada x=g(x)
        const g =Gfunciones[func](parseFloat(inpa.value), parseFloat(inpb.value), 100) 
        myChart.data.datasets.push({
            label: 'g(x)',
            data:g,  // Y values
            borderColor: 'red',
            borderWidth: 2,
            fill: false,
            pointRadius: 0
        });
    
        myChart.update();
        let x=1;
        function animateChart() {
            if (x > tabla.length-1) return; // Stop animation
            slider.value = parseInt(tabla[x][0])
            sliderValue.textContent = slider.value;
            //Actualizar labels
           
            actlblRaiz(tabla[x][5], tabla[x][1], tabla.length-1, x)
            lblerr.textContent = 'Error absoluto: ' + tabla[x][5];
            
            //Actualizar la posicion del punto
            myChart.data.datasets[1].label = 'x = ' + parseFloat(tabla[x][1]).toFixed(5);
            myChart.data.datasets[1].data =  [{x:parseFloat(tabla[x][1]), y : 0}];
            myChart.data.datasets[2].label = 'xn = ' + parseFloat(tabla[x][2]).toFixed(5);
            myChart.data.datasets[2].data =  [{x:parseFloat(tabla[x][2]), y : 0}];
            myChart.data.datasets[3].label= 'g(x) =' + parseFloat(tabla[x][3]).toFixed(5)
            myChart.data.datasets[3].data=[{x:parseFloat(tabla[x][1]), y : parseFloat(tabla[x][3])},]

            //Linea de p a g(x) vertical rline
            graphVerticalLine('rline',0, parseFloat(tabla[x][3]), parseFloat(tabla[x][1]) );

            //Linea de g(x) a identidad horizontal gline
            graphHorizontalLine('gline', parseFloat(tabla[x][1]), parseFloat(tabla[x][2]), parseFloat(tabla[x][2]));
           
            
            //Linea de identidad a p1 vertical tline
            graphVerticalLine('tline',0, parseFloat(tabla[x][3]), parseFloat(tabla[x][2]) );

        
            myChart.update();

            x += 1; 

            setTimeout(animateChart, delay); // Add delay
        }
        animateChart();
    }

    if (method === 'btnNR'){
        const {raiz, tabla } = MT.newton_r(func, parseFloat(intp0.value), parseFloat(inptol.value), parseInt(intmop.value))
        console.log(raiz)
        tabla.unshift(['i', 'x', 'xn', 'f(x)', 'Ea'])
        tablaG =tabla;
        console.log(tabla)
        lblraiz.textContent = 'Raiz: ' + tabla[1][1];
        lblerr.textContent = 'Error absoluto:: ' + tabla[1][4];
        generarTabla(tabla)
        //Agregar el punto que ira animando atravez del tiempo
        myChart.data.datasets.push({
            label: 'x' + parseFloat(tabla[1][1]),
            data: [{x:parseFloat(tabla[1][1]), y : 0}], // Y values
            borderColor: 'red',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
        });
        //Graficar xn
        myChart.data.datasets.push({
            label: 'xn',
            data: [], // Y values
            borderColor: 'rgb(0, 255, 255)',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
        });

        //Agregar la linea tangente que ira mostrandose a traves del tiempo
        myChart.data.datasets.push({
            label: 'tangente',
            data: [], // Y values
            borderColor: 'rgba(30, 255, 0, 0.73)',
            borderWidth: 2,
            fill: false,
            pointRadius: 0
        });

       
        slider.max = tabla.length-1;

        let x = 1;
       
        
        function animateChart() {
            if (x > tabla.length-1) return; // Stop animation
            slider.value = parseInt(tabla[x][0])
            sliderValue.textContent = slider.value;
            //Actualizar labels
            actlblRaiz(tabla[x][4], tabla[x][1], tabla.length-1, x)
            lblerr.textContent = 'Error absoluto: ' + tabla[x][4];
            //Actualizar la posicion del punto
            myChart.data.datasets[1].label = 'x = ' + parseFloat(tabla[x][1]).toFixed(5);
            myChart.data.datasets[1].data =  [{x:parseFloat(tabla[x][1]), y : 0}];
            myChart.data.datasets[2].label = 'xn = ' + parseFloat(tabla[x][2]).toFixed(5);
            myChart.data.datasets[2].data =  [{x:parseFloat(tabla[x][2]), y : 0}];
            myChart.data.datasets[3].data=[
                {x:parseFloat(tabla[x][1]), y : parseFloat(tabla[x][3])},
                {x:parseFloat(tabla[x][2]), y : 0}
            ]

            //lINEA DE X A la recta tangente  vertical rline
            graphVerticalLine('rline', 0 ,parseFloat(tabla[x][3]),parseFloat(tabla[x][1]))

            myChart.update();

            x += 1; 

            setTimeout(animateChart, delay); // Add delay
        }

        animateChart(); // Start animation
    }

    if (method === 'btnBS'){
        const {raiz, tabla } = MT.bisection(func, parseFloat(intp0.value), parseFloat(intp1.value), parseFloat(inptol.value), parseInt(intmop.value))
        tabla.unshift(['i', 'a', 'b', 'c', 'f(x)', 'intervalo']);
        tablaG=tabla;

        generarTabla(tabla)
        slider.max = tabla.length-1;
        let x=1;

        //Tomar los valores maximos en la grafica para sacar un porciento para las lineas rectas
        let diferencia =  myChart.options.scales.y.max - myChart.options.scales.y.min;
        //obtenemos los valores para el 2.5%
        lineheight = diferencia*0.025

        //Agregar el punto que ira animando atravez del tiempo
        myChart.data.datasets.push({
            label: 'c = ' + parseFloat(tabla[1][3]),
            data: [], // Y values
            borderColor: 'red',
            borderWidth: 2,
            fill: false,
            pointRadius: 2
        });
        //Agregar linea vertical a
        myChart.data.datasets.push({
            label: 'a = ' + parseFloat(tabla[1][1]),
            data: [], // Y values
            borderColor: 'rgb(60, 255, 0)',
            borderWidth: 2,
            fill: false,
            pointRadius: 0
        });
        //Agregar linea vertical b
        myChart.data.datasets.push({
            label: 'b = ' + parseFloat(tabla[1][2]),
            data: [], // Y values
            borderColor: 'rgb(153, 0, 255)',
            borderWidth: 2,
            fill: false,
            pointRadius: 0
        });

        function animateChart() {
            if (x > tabla.length-1) return;
            //Actualiza slider
            slider.value = parseInt(tabla[x][0])
            sliderValue.textContent = slider.value;
            //Actualizar labels
            actlblRaiz(tabla[x][5], tabla[x][3], tabla.length-1, x)
            lblerr.textContent = 'Error absoluto: ' + tabla[x][5];
            //Actualizar el punto c
            myChart.data.datasets[1].label = 'c = ' + parseFloat( tabla[x][3]).toFixed(5);
            myChart.data.datasets[1].data =  [{x:parseFloat(tabla[x][3]), y : 0}];
            //Actualizar linea a
            myChart.data.datasets[2].label = 'a = ' + parseFloat( tabla[x][1]).toFixed(5);
            myChart.data.datasets[2].data =  [
                {x:parseFloat(tabla[x][1]), y : lineheight},
                {x:parseFloat(tabla[x][1]), y : -lineheight},
        
            ];

            //actualizar linea b
            myChart.data.datasets[3].label = 'b = ' + parseFloat( tabla[x][1]).toFixed(5);
            myChart.data.datasets[3].data =  [
                {x:parseFloat(tabla[x][2]), y : lineheight},
                {x:parseFloat(tabla[x][2]), y : -lineheight},
        
            ];
            myChart.update();

            x += 1; 

            setTimeout(animateChart, delay); // Add delay

        }
        animateChart()


    }
    
    
});


slider.addEventListener("input", function() {
    sliderValue.textContent = slider.value; // Change the value of <a>
    if (tablaG){
        
        if(method === 'btnNR'){
            const x = slider.value;
            //Actualizar labels
            actlblRaiz(tablaG[x][4], tablaG[x][1], tablaG.length-1, x)
            lblerr.textContent = 'Error absoluto: ' + tablaG[x][4];
            //Actualizar la posicion del punto
            myChart.data.datasets[1].label = 'x = ' + parseFloat(tablaG[x][1]).toFixed(5);
            myChart.data.datasets[1].data =  [{x:parseFloat(tablaG[x][1]), y : 0}];
            myChart.data.datasets[2].label = 'xn =' + parseFloat(tablaG[x][2]).toFixed(5);
            myChart.data.datasets[2].data =  [{x:parseFloat(tablaG[x][2]), y : 0}];
            myChart.data.datasets[3].data=[
                {x:parseFloat(tablaG[x][1]), y : parseFloat(tablaG[x][3])},
                {x:parseFloat(tablaG[x][2]), y : 0}
            ]

            //lINEA DE X A la recta tangente
           //lINEA DE X A la recta tangente  vertical rline
            graphVerticalLine('rline', 0 ,parseFloat(tablaG[x][3]),parseFloat(tablaG[x][1]));
            myChart.update();
            
        }

        if(method === 'btnPF'){
            const x = slider.value;
         
            //Actualizar labels
           
            actlblRaiz(tablaG[x][5], tablaG[x][1], tablaG.length-1, x)
            lblerr.textContent = 'Error absoluto: ' + tablaG[x][5];
            
            //Actualizar la posicion del punto
            myChart.data.datasets[1].label = 'x = ' + parseFloat(tablaG[x][1]).toFixed(5);
            myChart.data.datasets[1].data =  [{x:parseFloat(tablaG[x][1]), y : 0}];
            myChart.data.datasets[2].label = 'xn = ' + parseFloat(tablaG[x][2]).toFixed(5);
            myChart.data.datasets[2].data =  [{x:parseFloat(tablaG[x][2]), y : 0}];
            myChart.data.datasets[3].label= 'g(x) =' + parseFloat(tablaG[x][3]).toFixed(5)
            myChart.data.datasets[3].data=[{x:parseFloat(tablaG[x][1]), y : parseFloat(tablaG[x][3])},]

            //Linea de p a g(x) vertical rline
            graphVerticalLine('rline',0, parseFloat(tablaG[x][3]), parseFloat(tablaG[x][1]) );

            //Linea de g(x) a identidad horizontal gline
            graphHorizontalLine('gline', parseFloat(tablaG[x][1]), parseFloat(tablaG[x][2]), parseFloat(tablaG[x][2]));
           
            
            //Linea de identidad a p1 vertical tline
            graphVerticalLine('tline',0, parseFloat(tablaG[x][3]), parseFloat(tablaG[x][2]) );

        
            myChart.update();


        }

        if(method === 'btnBS'){
            const x = slider.value;
            //Actualizar labels
            actlblRaiz(tablaG[x][5], tablaG[x][3], tablaG.length-1, x)
            lblerr.textContent = 'Error absoluto: ' + tablaG[x][5];
            //Actualizar el punto c
            myChart.data.datasets[1].label = 'c = ' + parseFloat( tablaG[x][3]).toFixed(5);
            myChart.data.datasets[1].data =  [{x:parseFloat(tablaG[x][3]), y : 0}];
            //Actualizar linea a
            myChart.data.datasets[2].label = 'a = ' + parseFloat( tablaG[x][1]).toFixed(5);
            myChart.data.datasets[2].data =  [
                {x:parseFloat(tablaG[x][1]), y : lineheight},
                {x:parseFloat(tablaG[x][1]), y : -lineheight},
        
            ];

            //actualizar linea b
            myChart.data.datasets[3].label = 'b = ' + parseFloat( tablaG[x][1]).toFixed(5);
            myChart.data.datasets[3].data =  [
                {x:parseFloat(tablaG[x][2]), y : lineheight},
                {x:parseFloat(tablaG[x][2]), y : -lineheight},
        
            ];
            myChart.update();

        }
    }
});