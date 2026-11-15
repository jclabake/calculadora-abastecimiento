// ---------- Ejercicio 1: El cálculo de los snacks ----------

// 1. Edad actual
let edadActual = 20;

// 2. Edad máxima estimada
let edadMaxima = 85;

// 3. Snack favorito
let snack = "papas fritas";

// 4. Snacks que comés por día
let snacksPorDia = 2;

// 5. Snacks que te quedan por comer en el resto de tu vida
let snacksRestantes = (edadMaxima - edadActual) * 365 * snacksPorDia;

// 6. Resultado en un alert
alert(`Necesitarás ${snacksRestantes} de ${snack} para que te alcancen hasta los ${edadMaxima} años.`);

// 7. Precio por unidad y gasto total a lo largo de la vida
let precioPorUnidad = 500;
let gastoTotal = snacksRestantes * precioPorUnidad;
alert(`A lo largo de tu vida vas a gastar $${gastoTotal} en ${snack}.`);


// ---------- Ejercicio 2: Presupuesto de viaje ----------

// 1. Días de viaje
let diasDeViaje = 10;

// 2. Presupuesto máximo para todo el viaje
let presupuestoMaximo = 300000;

// 3. Comidas totales durante el viaje
let comidasTotales = 30;

// 4. Cuánto podés gastar en cada comida
let dineroPorComida = presupuestoMaximo / comidasTotales;

// 5. Resultado en un alert
alert(`Podés gastar $${dineroPorComida} en cada comida para que te alcance la plata durante los ${diasDeViaje} días de viaje.`);