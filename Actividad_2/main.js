
function exT(a, b, g, pasos = 5){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: TAYex(x, g) };  // Calcula e^x a traves del polinomio de Taylor
    });
    return data;
}

const dataYEqualsX=[]
const config = {
    type: 'line',
    data: {
        datasets: [
            {
                label: 'Selecciona una funcion',
                data: dataYEqualsX,
                borderColor: 'rgba(235, 0, 0, 1)',
                backgroundColor: 'rgba(235, 0, 0, 1)',
                pointRadius: 0.1, 
                showLine: true, // Conectar los puntos
                tension: 0
            },
           
           
        ]
    },
    options: {
        plugins: {
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
                  }
              }
            }
          },
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


const anim = document.getElementById("animate")
anim.addEventListener('click', function() {
    anim.style.color = "#ff0000"
})