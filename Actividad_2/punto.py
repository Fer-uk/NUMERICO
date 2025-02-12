def g(x):
    return (10 - 4*x**2)**(1/3)

def punto_fijo(x0, tol=1e-6, max_iter=100):
    for i in range(max_iter):
        
        x1 = g(x0)
        if abs(x1 - x0) < tol:
            return x1
        x0 = x1
        print(f'{x1} {x0}')
    return None  # No convergió

x0 = 1.5  # Estimación inicial
raiz = punto_fijo(x0)
print(f"Raíz aproximada: {raiz}")
