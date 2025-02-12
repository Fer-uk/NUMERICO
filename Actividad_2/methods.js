const funciones = {
    a: x => Math.pow(x, 3) + 4 * Math.pow(x, 2) - 10, // x³ + 4x² - 10
    b: x => Math.pow(x, 3) - 2 * Math.pow(x, 2) - 5,  // x³ - 2x² - 5
    c: x => Math.pow(x, 3) + 3 * Math.pow(x, 2) - 1,  // x³ + 3x² - 1
    d: x => x - Math.cos(x),  // x - cos(x)
    e: x => Math.exp(x) + Math.pow(2, -x) + 2 * Math.cos(x) - 6  // e^x + 2^(-x) + 2cos(x) - 6
};

const funcionesFixed = {
    a: x => {      // (4x² - 10)^1/3
        let det = (10-4*Math.pow(x,2))
        if (det<0){
            return (-1)*Math.pow((-1)*det, (1/3))
        }
        return Math.pow(det, (1/3))
    }, 
    b: x => Math.pow(x, 3) - 2 * Math.pow(x, 2) - 5,  // x³ - 2x² - 5
    c: x => Math.pow(x, 3) + 3 * Math.pow(x, 2) - 1,  // x³ + 3x² - 1
    d: x => x - Math.cos(x),  // x - cos(x)
    e: x => Math.exp(x) + Math.pow(2, -x) + 2 * Math.cos(x) - 6  // e^x + 2^(-x) + 2cos(x) - 6
}

const funcionesDerivadas = {
    a: x => 3 * Math.pow(x,2) + 8 * x,  // 3x2 + 8x
    b: x => 3 * Math.pow(x,2) - 4 * x,  // 3x2 - 4x 
    c: x => 3 * Math.pow(x,2) + 6 * x,  // 3x^2 + 6x 
    d: x =>  Math.sin(x),  //   sen(x)
    e: x => Math.exp(x) - Math.log(2) * Math.pow(2, -x) + 2 * Math.cos(x) - 6  // e^x - ln(2) * 2^(-x) - 2cos(x)
}

export function fixed_point(opcion, p, tol, i) {
    const func = funciones[opcion];
    const gx = funcionesFixed[opcion];

    if (!func) {
        console.error("Opción de función no válida.");
        return null;
    }

    let iteraciones = 0;
    let p1;
    let tabla = []; // Almacena las quintuplas de cada iteración

    while (iteraciones < i) {
        p1 = gx(p);

        // Guardar la quintupla (iteración, p, p1, f(p), error)
        tabla.push([iteraciones + 1, p, p1, func(p), Math.abs((p1 - p))/2]);

        if (p1 === 0 || Math.abs((p1 - p)) / 2 < tol) break; // Convergencia

       p = p1

        iteraciones++;
    }
    return { raiz: p, tabla };

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


export function false_position(opcion, a, b, tol, i) {
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
        c = (b * func(a) - a * func(b)) / (func(a) - func(b));
        let fc = func(c);

        // Guardar la quintupla (iteración, a, b, c, f(c))
        tabla.push([iteraciones + 1, a, b, c, fc]);

        if (fc === 0 || Math.abs(fc) < tol) break; // Convergencia

        if (func(a) * fc > 0) {
            a = c;
        } else {
            b = c;
        }

        iteraciones++;
    }

    return { raiz: c, tabla };
}

export function newton_r(opcion, x, tol, i){
    const func = funciones[opcion];
    const der = funcionesDerivadas[opcion];

    let iteraciones = 0;
    let xn;
    
    let tabla = []; 

    while (iteraciones < i) {
        xn = x - func(x)/der(x);

        // Guardar la quintupla (iteración, x, xn, f'(x), f(c))
        tabla.push([iteraciones + 1, x, xn, der(x) , func(x)]);

        if (fc === 0 || Math.abs(xn-x) < tol) break; // Convergencia

        iteraciones++;
    }

    return { raiz: c, tabla };

}