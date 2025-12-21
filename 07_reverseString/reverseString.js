

const reverseString = function(str) {

   let parts=str.split("");
   let rev = [];
   

   for (let index=parts.length-1; index>=0; index--) {
        rev.push(parts[index]);
   }
   return rev.join("");
};

// Do not edit below this line
module.exports = reverseString;
