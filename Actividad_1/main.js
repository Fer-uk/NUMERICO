

function ex(grado, puntos, a, b){
    
}

// Generar datos para y = x
const dataYEqualsX = Array.from({ length: 21 }, (_, i) => ({
    x: i - 10, // Valores de x desde -10 hasta 10
    y: i - 10  // y = x
}));

// Generar datos para y = x^2
const dataYEqualsXSquared = Array.from({ length: 21 }, (_, i) => {
    const x = i - 10;
    return { x: x, y: x * x }; // y = x^2
});

// Configuración del gráfico
const config = {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'y = x',
                data: dataYEqualsX,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                showLine: true, // Conectar los puntos
                tension: 0
            },
            {
                label: 'y = x^2',
                data: dataYEqualsXSquared,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                showLine: true, // Conectar los puntos
                tension: 0
            }
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
new Chart(ctx, config);