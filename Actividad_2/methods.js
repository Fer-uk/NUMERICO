export function fixed_point(){
    return
}



const funciones = {
    a: x => Math.pow(x, 3) + 4 * Math.pow(x, 2) - 10, // x³ + 4x² - 10
    b: x => Math.pow(x, 3) - 2 * Math.pow(x, 2) - 5,  // x³ - 2x² - 5
    c: x => Math.pow(x, 3) + 3 * Math.pow(x, 2) - 1,  // x³ + 3x² - 1
    d: x => x - Math.cos(x),  // x - cos(x)
    e: x => Math.exp(x) + Math.pow(2, -x) + 2 * Math.cos(x) - 6  // e^x + 2^(-x) + 2cos(x) - 6
};

export function fixed_point() {
    return
}

export function bisection(opcion, a, b, tol, i) {
    const func = funciones[opcion];

    if (!func) {
        console.error("Opción de función no válida.");
        return null;
    }

    if (func(a) * func(b) > 0) {
        console.error("f(a) y f(b) no tienen signos distintos");
        return null;
    }

    let iteraciones = 0;
    let c;
    let tabla = []; // Almacena las quintuplas de cada iteración

    while (iteraciones < i) {
        c = (a + b) / 2;
        let fc = func(c);

        // Guardar la quintupla (iteración, a, b, c, f(c))
        tabla.push([iteraciones + 1, a, b, c, fc]);

        if (fc === 0 || (b - a) / 2 < tol) break; // Convergencia

        if (func(a) * fc > 0) {
            a = c;
        } else {
            b = c;
        }

        iteraciones++;
    }

    return { raiz: c, tabla };
}