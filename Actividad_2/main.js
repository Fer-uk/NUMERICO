import * as FN from './functions.js';


const ctx = document.getElementById('myChart').getContext('2d');


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
                pan: { enabled: true, mode: 'xy' },
                zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'xy' }
            }
        }
    },
};

const myChart = new Chart(ctx, config);


const anim = document.getElementById("anim");
const btnfn = document.getElementsByClassName('btnfn');
const btnmtd = document.getElementsByClassName('btnmtd');
const inpa = document.getElementById('ainput');
const inpb = document.getElementById('binput');
const inptol = document.getElementById('tol');
const intp0 = document.getElementById("p0");
const intp1 = document.getElementById('p1');
const intmop = document.getElementById('miter');
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
        switch (this.id){
            case "btnA":
                inpa.value = 1;
                inpb.value = 3;
            break;
            default:
            break;
        }

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
        switch (this.id){
            case 'btnPF': 
                intp1.style.display = "none";
                intp0.value = 1.0
            break;
            default:
            break;
        }
    });
});

function graficar(gr){
    let dat;
    let miny;
    let maxy;
    let lab;
    switch (gr) {
        case 'btnA':
           const { data, minY, maxY }  = FN.a();
           console.log(data)
            miny = minY;
            maxy = maxY
           dat = data
            lab= 'x3 + 4x2 -10'
        break;
    
        default:
            break;
    }
    

    myChart.data.datasets.push({
        label: lab,
        data: dat, // Y values
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
        pointRadius: 0
    });
    myChart.options.scales.y.min = miny;
    myChart.options.scales.y.max = maxy;
    myChart.options.scales.x.min = parseFloat(inpa.value);
    myChart.options.scales.x.max = parseFloat(inpb.value);
    console.log(myChart.data)
    myChart.update()
}

anim.addEventListener('click', function() {

    if (method === 'btnPF'){
        graficar(func);






        let x = 0;
        const step = 1;  // Keep the same number of points
        const delay = 100; // Slower animation (increase for slower effect)
        /*
        function animateChart() {
            if (x > 100) return; // Stop animation

            chartData.datasets[0].label = 'grado: '+ x;
            chartData.datasets[0].data = exT(0,10,10, x);

            myChart.update();

            x += step; 

            setTimeout(animateChart, delay); // Add delay
        }

        animateChart(); // Start animation*/
    }
    
});