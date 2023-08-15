// 'use strict'
// // No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
    //cuando array = 1, termino ejecucion
    //let pivote = Math.random( ---)
    if(array.length <= 1){
        return array;
    }
    let indicePivote = Math.floor(Math.random() * array.length);
    let pivote = array[indicePivote];
    let arrayIzq =[];
    let arrayDer = [];    
    for(let i = 0; i < array.length; i++){ 
        if(i === indicePivote)continue;
    if(pivote < array[i]){
        arrayDer.push(array[i])
               
    }else {
        arrayIzq.push(array[i])//         
    }

}
return quickSort(arrayIzq).concat(pivote).concat(quickSort(arrayDer));


}
// }

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function mergeSort(array) { // Implementar el método conocido como mergeSort para ordenar de menor a mayor // el array recibido como parámetro // Devolver el array ordenado resultante // Tu código: 
    if(array.length <= 1) return array; 
    let mid = Math.floor(array.length / 2); 
    let left = []; let right = []; // Copiar la primera mitad del array en left 
    for(let i = 0; i < mid; i++) { left.push(array[i]); } // Copiar la segunda mitad del array en right 
    for(let i = mid; i < array.length; i++) { right.push(array[i]); } // Ordenar recursivamente las mitades 
    left = mergeSort(left); right = mergeSort(right); 
    let resultado = []; // Usar variables para guardar los índices de los arrays 
    let i = 0; // Índice de left 
    let j = 0; // Índice de right 
    while(i < left.length && j < right.length)
    { if(left[i] < right[j]){ resultado.push(left[i]); i++; // Incrementar el índice de left 
} else { resultado.push(right[j]); j++; // Incrementar el índice de right 
} } // Concatenar los elementos restantes de left y right al final del resultado
 for(let k = i; k < left.length; k++) 
 { resultado.push(left[k]); 
} 
for(let k = j; k < right.length; k++) { 
    resultado.push(right[k]); } 
    return resultado;

}
console.log(mergeSort([5,9,2,6,1,4,8,3]));


  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};








LinkedList.prototype.changeNotNumbers = function(){
  // Tu código aca:
let current = this.head;
let count = 0;
while(current){
  if(isNaN(current.value)){
    count++;
    current.value = 'Kirikocho'
  }
  current = current.next
}
return count;
}

console.log(changeNotNumbers([Head --> [1] --> ['2'] --> [false] --> ['Franco']]))