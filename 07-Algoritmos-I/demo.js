// Clase para representar un nodo de la lista
class Nodo {
  constructor(valor) {
    this.valor = valor; // El valor del nodo
    this.siguiente = null; // El puntero al siguiente nodo
  }
}

// Clase para representar una lista enlazada simple
class ListaEnlazada {
  constructor() {
    this.cabeza = null; // El primer nodo de la lista
    this.tamaño = 0; // El número de nodos de la lista
  }

  // Método para insertar un valor al final de la lista
  insertar(valor) {
    let nuevoNodo = new Nodo(valor); // Crear un nuevo nodo con el valor dado
    if (this.cabeza == null) { // Si la lista está vacía
      this.cabeza = nuevoNodo; // Asignar el nuevo nodo como la cabeza de la lista
    } else { // Si la lista no está vacía
      let actual = this.cabeza; // Empezar desde la cabeza de la lista
      while (actual.siguiente != null) { // Mientras no se llegue al final de la lista
        actual = actual.siguiente; // Avanzar al siguiente nodo
      }
      actual.siguiente = nuevoNodo; // Asignar el nuevo nodo como el siguiente del último nodo
    }
    this.tamaño++; // Incrementar el tamaño de la lista
  }

  // Método para eliminar un valor de la lista
  eliminar(valor) {
    let actual = this.cabeza; // Empezar desde la cabeza de la lista
    let anterior = null; // Guardar el nodo anterior al actual
    while (actual != null) { // Mientras no se llegue al final de la lista
      if (actual.valor == valor) { // Si se encuentra el valor a eliminar
        if (anterior == null) { // Si el valor está en la cabeza de la lista
          this.cabeza = actual.siguiente; // Asignar el siguiente del actual como la nueva cabeza de la lista
        } else { // Si el valor no está en la cabeza de la lista
          anterior.siguiente = actual.siguiente; // Asignar el siguiente del actual como el siguiente del anterior
        }
        this.tamaño--; // Decrementar el tamaño de la lista
        return true; // Retornar verdadero para indicar que se eliminó el valor
      }
      anterior = actual; // Actualizar el nodo anterior al actual
      actual = actual.siguiente; // Avanzar al siguiente nodo
    }
    return false; // Retornar falso para indicar que no se encontró el valor a eliminar
  }

  // Método para recorrer la lista y mostrar sus valores
  mostrar() {
    let actual = this.cabeza; // Empezar desde la cabeza de la lista
    let resultado = ""; // Inicializar una cadena vacía para guardar el resultado
    while (actual != null) { // Mientras no se llegue al final de la lista
      resultado += actual.valor + " -> "; // Añadir el valor del nodo actual y una flecha al resultado
      actual = actual.siguiente; // Avanzar al siguiente nodo
    }
    resultado += "null"; // Añadir null al final del resultado para indicar el fin de la lista
    console.log(resultado); // Mostrar el resultado por consola
  }
  // Método para eliminar un valor de la lista y retornar su valor
eliminarYRetornar(valor) {
  let actual = this.cabeza; // Empezar desde la cabeza de la lista
  let anterior = null; // Guardar el nodo anterior al actual
  while (actual != null) { // Mientras no se llegue al final de la lista
    if (actual.valor == valor) { // Si se encuentra el valor a eliminar
      if (anterior == null) { // Si el valor está en la cabeza de la lista
        this.cabeza = actual.siguiente; // Asignar el siguiente del actual como la nueva cabeza de la lista
      } else { // Si el valor no está en la cabeza de la lista
        anterior.siguiente = actual.siguiente; // Asignar el siguiente del actual como el siguiente del anterior
      }
      this.tamaño--; // Decrementar el tamaño de la lista
      return actual.valor; // Retornar el valor del nodo eliminado
    }
    anterior = actual; // Actualizar el nodo anterior al actual
    actual = actual.siguiente; // Avanzar al siguiente nodo
  }
  return null; // Retornar null si no se encontró el valor a eliminar
}

}

// Crear una instancia de la clase ListaEnlazada
let miLista = new ListaEnlazada();

// Insertar algunos valores a la lista
miLista.insertar(10);
miLista.insertar(20);
miLista.insertar(30);
// console.log();
// Mostrar los valores de la lista



// Eliminar un valor de la lista
// miLista.eliminar(20);

// Mostrar los valores de la lista después de eliminar
// miLista.mostrar();
 
// console.log(miLista.mostrar(10));
// miLista.eliminarYRetornar(10);
miLista.eliminarYRetornar(10)
console.log(miLista.mostrar());