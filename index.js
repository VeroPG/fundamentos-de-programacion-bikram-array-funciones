// 1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio = [];

// 2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 
//(considerando al 0 par)
let arrayNumerosPares = [0, 2, 4, 6, 8];

// 4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

// 5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
let suma = (a, b) => a + b;

//6.- Crea la función potenciacion que acepte como argumento dos números y devuelva
    // el resultado de elevar el primero(a) al segundo(b)(a ^ b)
const potenciacion= (a, b)=>{
  if (b === 0) {
    return 1;
  } else if (b === 1) {
    return a
  }else if (b > 1) {
    let resultado = 1;
    for (let i = 0; i < b; i++) {
        resultado *= a;
    }
    return resultado;
  }
}
// 7.- Crea la función separarPalabras que acepte como argumento un string 
    //y devuelva un array de palabras 'hola mundo' => [hola, mundo]
const separarPalabras = (texto) => {
  return texto.split(" ");
  
}
// 8.- Crea la función repetirString que acepte como argumento un string y 
    //un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
const repetirString = (texto, num) => {
  let resultado = '';
  for (i = 0; i < num; i++){
      resultado += texto;
    } 
    return resultado;
  }  
  
// 9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
const esPrimo = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        return false;
    };
};
return true;
};
  
// 10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor

const ordenarArray = (array) => {
  array.sort((a, b) => {
          return a - b;
      });
  return array;
};

// 11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares

const obtenerPares = (array) => {
  let arrayPares = [];
  for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0){
          arrayPares.push(array[i]);
      };
  };
  return arrayPares;
};

// 12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto
//      Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'

function pintarArray(array){
  return `[${array.join(', ')}]`;

}
// 13.- Crear la función arrayMapi que acepte como argumento un Array y una función y
//      devuelva un array en el que se haya aplicado la función a cada elemento del array

function arrayMapi(lista, funcion) {
  let resultado = [];

  for (let i = 0; i < lista.length; i++) {
      resultado.push(funcion(lista[i]));
  }

  return resultado;
}

// 14.- Crear la función eliminarDuplicados que acepte como argumento un array y
  // devuelva un array en el que se hayan eliminado los duplicados
function eliminarDuplicados(array) {
  let nuevoArray = [];
  for (i = 0; i < array.length; i++) {

      if (!nuevoArray.includes(array[i])) {
        nuevoArray.push(array[i]);
      }
  }
  return nuevoArray;

}


// 15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

//    let arrayNumerosNeg=[0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
      
const arrayNumerosNeg = [];
for (let i = 0; i >= -9; i--) {
  arrayNumerosNeg.push(i);
}

// 16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

let holaMundo=["Hola", "Mundo"]

// 17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

let loGuardoTodo=['hola', 'que', 23, 42.33,'tal']

// 18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

let arrayDeArrays=[[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

// 19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación

const multiplicacion=(a,b)=>a*b

// 20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division

const division=(a,b)=>a/b

// 21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

const esPar = (num) => {
  if (num % 2 === 0) {
    return true
  } else
    return false
}

//  22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación
    //(todas aceptan 2 números como argumento y devuelve el resultado de su operación)
const arrayFunciones = [
  function suma(a, b) {
      return a + b;
  },
  function resta(a, b) {
      return a - b;
  },
  function multiplicacion(a, b) {
      return a * b;
  }
];
// 23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
const ordenarArray2 = (array) => {
  array.sort((a, b) => {
    return b-a;
});
return array;
};
// 24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

const obtenerImpares = (array) => {
  let impares = []
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 !== 0) {
      impares.push(array[i])
    }
  }
  return impares
}

// 25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números
    // en el array Array: [1, 2, 3] resultado: 6
    
const sumarArray = (array) => {
  let res = 0
  for (let i = 0; i < array.length; i++){
    res +=array[i]
  }
  return res
}

// 26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación
  //de los números en el array Array: [2, 3, 4] resultado: 24

const multiplicarArray = (array) => {
  let res = 1;
  for (let i = 0; i < array.length; i++) {
      res *= array[i];
  }
  return res;
};

