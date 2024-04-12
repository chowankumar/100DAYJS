//QUESTION:
//write  a function to sort an array of number in an ascendind order;

//CONSTRAINTS:
//fuction should take an array of number as input.
//it will return new array with the number sorted in the ascending order
//the orignam array will be remain unchanged
//you are not allowed to use built-in sort() method

const sortArrayAscending=(arr)=>{
           return arr.sort((a,b)=> b-a)
}
console.log(sortArrayAscending([2,3,1,4,5]))
 