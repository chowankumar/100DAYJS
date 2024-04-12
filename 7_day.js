//QUESTION:
//write the function findMax that takes an array of numbers as inout and returns the maximum number in the array

//NOTES:
//here (...arr) this is spread operator and it is used to convert array in to number
const findMax=(arr)=>{return Math.max(...arr);}
   console.log(findMax([1,2,3,4,5]))
    console.log(findMax([1,8,3,4,5]))
 