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
    Lista.prototype.search = function(searchInput) {
        let current = this.head;
        while (current) {
            if (typeof searchInput === 'function') {
                if (searchInput(current.value)) {
                    // Valor encontrado
                    return current.value;
                }
            } else {
                if (current.value === searchInput) {
                    // Valor encontrado
                    return current.value;
                }
            }
            current = current.next;
        }
        // Valor no encontrado
        return null;
      }

    Lista.prototype.addForNumber = function(element){
       
      }
    
    


// console.log(count);
let newList = new Lista()
// 
// 
// newList.add(2)
newList.add('Angel')
newList.add("Jose")
// newList.add("Luis")
// newList.delete
// console.log(_length
// newList.search('Angel')
// newList.search('Angel')
// console.log(newList);
// newList.addForNumber("Luis")
// console.log(newList)

function añadirAlInicio(newList){
    let añadir = new Lista(newList);
    let current = this.head;
    this.head = node;
    return node;
}
console.log(añadirAlInicio('Angel'));




