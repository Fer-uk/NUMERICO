
function exT(a, b, g, pasos = 5){
const data = Array.from({ length: pasos + 1 }, (_, i) => {
    let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
    return { x: x, y: TAYex(x, g) };  // Calcula e^x a traves del polinomio de Taylor
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
const ctx = document.getElementById('myChart').getContext('2d');

const chartData = {
    labels: [], // X values
    datasets: [{
        label: 'y = x²',
        data: [], // Y values
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
        pointRadius: 0
    }]
};

const config = {
    type: 'line',
    data: chartData,
    options: {
        animation: false,
        scales: {
            x: { type: 'linear', position: 'bottom' },
            y: { beginAtZero: true },
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
            }
        }
    },
};

const myChart = new Chart(ctx, config);


const anim = document.getElementById("anim");

anim.addEventListener('click', function() {
    let x = 0;
    const step = 1;  // Keep the same number of points
    const delay = 100; // Slower animation (increase for slower effect)

    function animateChart() {
        if (x > 100) return; // Stop animation

        chartData.datasets[0].label = 'grado: '+ x;
        chartData.datasets[0].data = exT(0,10,10, x);

        myChart.update();

        x += step; 

        setTimeout(animateChart, delay); // Add delay
    }

    animateChart(); // Start animation
    
    this.style.color = "#f0000";
});