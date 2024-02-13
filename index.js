let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

let suma = (a, b) => a + b;

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

const separarPalabras = (texto) => {
  return texto.split(" ");
  
}

const repetirString = (texto, num) => {
  let resultado = '';
  for (i = 0; i < num; i++){
      resultado += texto;
    } 
    return resultado;
  }  
  

const esPrimo = (num) => {
  if (num < 1) {
      return "no es un numero válido"
  }
  else if ((num % 1 === 0 && num % num === 0)) {
    return "no es un numero válido"  
  } else
    return "no es primo"
  
  }
  

