// let valor = ''
function Lista(){

    this.head = null;
}
function Node(element){
    this.value = element;
    this.next = null;
}
    
Lista.prototype.add = function(element){
    let node = new Node(element);
    let current =this.head;

if(current === null){
    this.head = node
    return node
}
while(current.next){
    
    current = current.next   
    
}
current.next = node
return node

}

Lista.prototype.delete = function(){
    if (this.head == null) {
        return null;
      }
      let current = this.head;
      if (current.next === null) {
        this.head = null;
        return current.value;
      }
      while (current.next.next != null) {
        current = current.next;
      }
      let last = current.next;
      current.next = null;
    //   console.log(last.value);
      return last.value;
    }
Lista.prototype.search = function(num){
    let current = this.head;
    while (current) {
        // Aquí puedes acceder al valor del elemento actual
        console.log(current.valor);
        // Avanzar al siguiente elemento en la lista
        current = current.siguiente;
    }
    
    

}

// console.log(count);
let newList = new Lista()
newList.add('Angel')
newList.add("Jose")
newList.add("Luis")
newList.add("Luis")
    // newList.delete
    // console.log(_length
    // newList.search('Angel')
console.log(newList);
// console.log(newList)





