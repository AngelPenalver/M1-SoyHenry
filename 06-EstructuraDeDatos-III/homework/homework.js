'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}
BinarySearchTree.prototype.size = function() {
   let count = 1;
   if (this.left) {
      count += this.left.size();
   }
   if (this.right) {
      count += this.right.size();
   }
   return count;
}

BinarySearchTree.prototype.insert = function(value){
   let subTree = new BinarySearchTree(value);
   if(value < this.value){
     if(this.left === null){
      this.left = subTree;
     }else{
         this.left.insert(value)
     }
   } else if(value > this.value){
      if(this.right === null) {
        this.right = subTree;
      } else {
        this.right.insert(value)
      }
   }
}

BinarySearchTree.prototype.contains = function(value){
   
   if (value === this.value) {
      return true;
   } else if (value < this.value) {
      if (this.left === null) {
         return false;
      } else {
         return this.left.contains(value);
      }
   } else {
      if (this.right === null) {
         return false;
      } else {
         return this.right.contains(value);
      }
   }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
   // if (order === 'pre-order') callback(this.value);
   // if (this.left !== null) this.left.depthFirstForEach(callback, order);
   // if (order === 'in-order') callback(this.value);
   // if (this.right !== null) this.right.depthFirstForEach(callback, order);
   // if (order === 'post-order') callback(this.value);
   switch(order){
      case "post-order": // izq - der - nodo
      this.left  && this.left.depthFirstForEach(cb,order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break
      case "pre-order": //nodo-izq-derecha
      cb(this.value);
      this.left  && this.left.depthFirstForEach(cb,order);
      this.right && this.right.depthFirstForEach(cb, order);
      break
      default: //izq-nodo-der
      this.left  && this.left.depthFirstForEach(cb,order);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);




   }
}




   BinarySearchTree.prototype.breadthFirstForEach = function(cb, almacen = []) {
      // let queue = [this]; // se crea un array, que va a funcionar como la cola y se usa el argumento (this) para asegurar que se va a iniciar en la raiz del arbol
      // while (queue.length > 0) { // luego se crea un bucle while, para verificar que todavia alla nodos que aun no se han procesado
      //    let node = queue.shift();
      //    callback(node.value);
      //    if (node.left !== null) {
      //       queue.push(node.left);
      //    }
      //    if (node.right !== null) {
      //       queue.push(node.right);
      //    }
      // }
      cb(this.value);
      if(this.left){
         almacen.push(this.left)
      }
      if(this.right){
         almacen.push(this.right)
      }
      if(almacen.length > 0){
         almacen.shift().breadthFirstForEach(cb, almacen);
      }

      
   }
   


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
