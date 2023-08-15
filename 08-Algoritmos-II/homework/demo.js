// function quickSort(array) {
//     //cuando array = 1, termino ejecucion
//     //let pivote = Math.random( ---)
//     if(array.length <= 1){
//         return array;
//     }
//     let indicePivote = Math.floor(Math.random() * array.length);
//     let pivote = array[indicePivote];
//     let arrayIzq =[];
//     let arrayDer = [];    
//     for(let i = 0; i < array.length; i++){ 
//         if(i === indicePivote)continue;
//     if(pivote < array[i]){
//         arrayDer.push(array[i])
//         console.log(arrayDer);            
//     }else {
//         arrayIzq.push(array[i])
//         console.log(arrayIzq);
//     }
// }
// console.log(arrayIzq);
// console.log(arrayDer);
// console.log(pivote);
// console.log(array)
// // arrayIzq.concat(pivote).concat(arrayDer)
// return quickSort(arrayIzq).concat(pivote).concat(quickSort(arrayDer));

// }
// console.log(quickSort([3,8,9,7,4,1,5,6,2]));
// // console.log(quickSort);


// function mergeSort(array) {
//     // Implementar el método conocido como mergeSort para ordenar de menor a mayor
//     // el array recibido como parámetro
//     // Devolver el array ordenado resultante
//     // Tu código:
//     if(array.length <= 1) return array;
//     let mid = Math.floor(array.length / 2);
//     let left = mergeSort(array.slice(0,mid));
//     let right = mergeSort(array.slice(mid));
//     let resultado = [];
//     while(left.length && right.length){
//         if(left[0] < right[0])resultado.push(left.shift());
//         else resultado.push(right.shift());
//         }
//         );

// }

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



function sortPrimeHouses(array) {
    // Tu código aquí:
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
                console.log(arrayDer);            
            }else {
                arrayIzq.push(array[i])
                console.log(arrayIzq);
            }
        } return sortPrimeHouses(arrayIzq).concat(pivote).concat(sortPrimeHouses(arrayDer));
}
console.log(sortPrimeHouses([3,6,2,5    ,1,4,7,9]))
// Me alegra que quieras mejorar tu lógica y entender mejor el código. Te puedo explicar brevemente qué hace cada elemento del código:

// La función mergeSort recibe un array como parámetro y devuelve otro array ordenado de menor a mayor.
// La primera línea del código comprueba si el array tiene un solo elemento o está vacío, en cuyo caso se devuelve el mismo array sin ordenar nada.
// La segunda línea del código calcula la mitad del tamaño del array y la guarda en una variable llamada mid.
// Las siguientes dos líneas crean dos arrays vacíos llamados left y right, que servirán para guardar las dos mitades del array original.
// El bucle for que va desde la línea 6 a la 8 copia los elementos del array original desde el inicio hasta la mitad (sin incluir) en el array left.
// El bucle for que va desde la línea 9 a la 11 copia los elementos del array original desde la mitad hasta el final en el array right.
// Las siguientes dos líneas llaman recursivamente a la función mergeSort con los arrays left y right, y guardan los resultados en las mismas variables. Estos resultados son dos arrays ordenados que contienen cada uno la mitad de los elementos del array original.
// La línea 14 crea un nuevo array vacío llamado resultado, que servirá para guardar los elementos ordenados de las dos mitades.
// La línea 16 crea una variable i que guarda el índice del primer elemento del array left.
// La línea 17 crea una variable j que guarda el índice del primer elemento del array right.
// El bucle while que va desde la línea 18 a la 25 compara los elementos de los arrays left y right que están en las posiciones indicadas por las variables i y j, e inserta el menor de ellos en el array resultado. Luego incrementa la variable correspondiente al array del que se tomó el elemento (i o j).
// El bucle for que va desde la línea 27 a la 29 copia los elementos restantes del array left (si es que quedan) al final del array resultado.
// El bucle for que va desde la línea 30 a la 32 copia los elementos restantes del array right (si es que quedan) al final del array resultado.
// La última línea devuelve el array resultado, que contiene todos los elementos del array original ordenados de menor a mayor.
// Espero que esta explicación te haya sido útil. Si quieres ver más ejemplos o ejercicios de algoritmos de ordenamiento, te recomiendo visitar los sitios web que te mencioné antes. ¿Hay algo más en lo que te pueda ayudar? 😊











//     function dividir(array){
//         let arraIzq = [];
//         let arraDer = [];
//         let divido = Math.floor(array.length / 2)
//     console.log(divido);
//     for(let i = 0; i < array.length ; i++){
//         if(i >=  divido){
//             arraDer.push(array[i])
//             console.log(arraDer);
//         }else{
//             arraIzq.push(array[i])
//             console.log(arraIzq);
            
//         }
//     }
//     return [arraDer,arraIzq]
//     }  
//     function marge(arraIzq,arraDer){
//         let arrIz = [];
//         let arrDer = [];
//         for(let i = 0; i < arraDer.length;i++){
//             for(let j = 0; j < arraIzq.length; j++){
//                 let div = Math.floor(arraIzq.length /2);
//                 if(i < div ){
//                     arrIz.push(arraIzq[i]);
//                     console.log(arrIz);
//                 }else{
//                     arrDer.push(arraDer[i]);
//                 }
//                 console.log(arrDer);
//                 if(arrDer[0]  > arrDer[1]){
//                     let aux = arrDer[0];
//                     arrDer[0] = arrDer[1];
//                     arrDer[1] = aux
//                     return arrDer
                    
//                 }
//             }
//         }
//         console.log(arrDer);


//     }
//     const array = [8, 4, 1, 7, 3, 9, 6, 5];
// const [arraDer, arraIzq] = dividir(array);
// marge(arraIzq, arraDer);

//     console.log(dividir(array));
//     console.log();

