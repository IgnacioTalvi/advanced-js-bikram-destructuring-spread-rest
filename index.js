//RESUELVE LOS EJERCICIOS AQUÍ

// Ejercicio 1
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

let ana = empleados[1];
console.log(ana);

// Ejercicio 2

let emailLuis = empleados[0].email;
console.log(emailLuis);

// Ejercicio 3

let a = 5;
let b = 3;

[a, b] = [b, a];

console.log(a, b);

// Ejercicio 4

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);

// Ejercicio 5

function sumEveryOther(...numeros) {
  let total = 0;

  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return total;
}

console.log(sumEveryOther(1, 2, 3, 4, 5));

// Ejercicio 6
