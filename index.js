//RESUELVE LOS EJERCICIOS AQUÍ

// Ejercicio 1
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;
console.log(ana);

// Ejercicio 2

const { email: emailLuis } = empleados[0];
console.log(emailLuis);

// Ejercicio 3

const { a = 5, b = 3 } = { a: 3, b: 5 };
console.log(a);

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

function addOnlyNums(...numeros) {
  let numeroActual = 0;
  for (let i = 0; i < numeros.length; i++)
    if (numeroActual !== "") {
      numeroActual + numeros[i];
      {
        return numeroActual;
      }
    }

  console.log(addOnlyNums(1, "perro", 6, "gato", "ratón", 7));
}

// Ejercicio 7

function countTheArgs(...args) {
  return args.length;
}

console.log(countTheArgs(1, "perro", 6, "gato", "ratón", 7));

// Ejercicio 8

let array1 = [5, 5, 2, 4, 2, 5];
let array2 = [1, 1, 1, 6, 5, 3, 4, 1, 5];

function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(combineTwoArrays(array1, array2));

// Ejercicio 9

let testArray = ["gato", "pollo", "cerdo", "cerdo"];

let devolverArray = () =>
  testArray.filter((element, index) => testArray.indexOf(element) === index);

console.log(devolverArray(testArray));

// Ejercicio 10

const combineAllArrays = (...array) => array.reduce((b, c) => [...b, ...c]);
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); //devuelve [3, 6, 7, 8, 2, 7, 3, 1]
console.log(
  combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
); // devuelve [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// Ejercicio 11
const sumAndSquare = (...array) =>
  array.reduce(
    (accumulator, currentValue) => accumulator + currentValue ** 2,
    0
  );
console.log(sumAndSquare(1, 2, 3, 4, 5, 6));
console.log(sumAndSquare(1, 2, 3, 4, 5));
