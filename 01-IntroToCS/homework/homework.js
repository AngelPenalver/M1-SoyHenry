'use strict';

function BinarioADecimal(num) {
   var decimal = parseInt(num, 2);
   
   return decimal;      

   }
   
function DecimalABinario(num) {
   var binario = num.toString(2);
   
   
   console.log(binario);
}
DecimalABinario(100)
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
