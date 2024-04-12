//QUESTION:
//write the fucntion which take the two array as the input and return the true if the array is equal mean contain the same element in the same order otherwise return the false;

const arrayEqual=(arr1,arr2)=>{
if(arr1.length !== arr2.length){
    return false;
}
return arr1.every((curVal,index)=> curVal == arr2[index])
}
console.log(arrayEqual([1,2,3],[1,2,3]))
