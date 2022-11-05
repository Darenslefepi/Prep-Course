// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = []
  for (let key in objeto) {
    array.push([key, objeto[key]])
  }
  return array
}

let objeto = {
  D: 1,
  B: 2,
  C: 3
}
console.log(deObjetoAmatriz(objeto)) 


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {}
  for (let i = 0; i < string.length; i++) {
    if(Object.keys(objeto).includes(string[i])) {
      objeto[string[i]] = objeto[string[i]] + 1
      continue
    }
    objeto[string[i]] = 1
  }
  return objeto

}

let a = "adsjfdsfsfjsdjfhacabcsbajda"
console.log(numberOfCharacters(a))

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let minusculas = ""
  let mayusculas = ""
  for (let i = 0; i <s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayusculas = mayusculas + s[i]
    }
    else {
      minusculas = minusculas + s[i]
    }
  }
  return mayusculas + minusculas
}

let b = "soyHENRY"
console.log(capToFront(b))  

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var strtoarray = str.split(" ")
  var arrayfinal = strtoarray.map(function(ele) {
    return ele.split("").reverse().join("");
  })
  return arrayfinal.join(" ");

} 

let c = "The Henry Challenge is close!"
console.log(asAmirror(c))

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numString = numero.toString();
  var resultado = numString.split("").reverse().join("");
  if (numString === resultado) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }

}
let d = 585
console.log(capicua(d))

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var difabc = "";
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c" ) {
      continue;
    } else {
      difabc += cadena[i];
    }
  }
  return difabc;
}

let e = "andres felipe giraldo garcia"
console.log(deleteAbc(e))

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j].length < arr[i].length) {
        var auxiliar = arr[j];
        arr[j] = arr[i]; 
        arr[i] = auxiliar; 
      }
    }
  }
  return arr; 
}

let f = ["You", "are", "beautiful", "looking"]
console.log(sortArray(f))

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoarr = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let t = 0; t < arreglo2.length ; t++) {
      if (arreglo1[i] === arreglo2[t]) {
        nuevoarr.push(arreglo1[i]);
      }
    }
  }
  return nuevoarr;
}

let g = ([1, 2 , 3], [1, 5, 8 , 3])
console.log(buscoInterseccion([1, 2 , 3], [1, 5, 8 , 3]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

