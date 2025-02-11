//x3 + 4x2 -10
export function a(a=1, b=3, pasos=30){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.pow(x,3)+ (4*Math.pow(x,2)) -10 }; 
    });
    // Extrae los valores de y
    const yValues = data.map(point => point.y);

    // Encontrar el mayor y menor valor de y
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

//x3 - 2x2 - 5 
export function b(a=1, b=4, pasos=30){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.pow(x,3)+ (2*Math.pow(x,2)) -5 }; 
    });
    // Extrae los valores de y
    const yValues = data.map(point => point.y);

    // Encontrar el mayor y menor valor de y
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

//x3 + 3x2 - 1 = 0
export function c(a=-4, b=0, pasos=30){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y: Math.pow(x,3)+ (3*Math.pow(x,2)) -1 }; 
    });
    // Extrae los valores de y
    const yValues = data.map(point => point.y);

    // Encontrar el mayor y menor valor de y
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

//x - cos(x) 
export function d(a=0, b=1.57, pasos=30){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y:x- Math.cos(x)  }; 
    });
    // Extrae los valores de y
    const yValues = data.map(point => point.y);

    // Encontrar el mayor y menor valor de y
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

//ex + 2-x + 2cos(x) – 6 
export function e(a=1, b=2.5, pasos=30){
    const data = Array.from({ length: pasos + 1 }, (_, i) => {
        let x = a + (i * (b - a) / pasos); // Genera valores equidistantes entre a y b
        return { x: x, y:Math.exp(x) + Math.pow(2,-x) + (2*Math.cos(x))- 6}; 
    });
    // Extrae los valores de y
    const yValues = data.map(point => point.y);

    // Encontrar el mayor y menor valor de y
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    console.log(minY, maxY)
    return { data, minY, maxY };
}

