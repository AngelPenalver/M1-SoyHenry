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