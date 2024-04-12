//QUESTION 12=> WRITE THE FUNCTION WHICH TAKES THE ARRAY OF INTEGER AS INPUT AND REMOVE THE DULICATE ELEMENTS IN THE ARRAY AND RETURN THE NEW ARRAY.

//CONSTRAINTS : 
//THE INPUT ARRAY MAY CONTAIN POSITIVE OR NEGATIVE INTEGERS.
//INPUT ARRAY MAY BE EMPTY.
//OUTPUT ARRAY RETURN THE ORIGNAL ORDER OF THE GIVEN ARRAY.

//NOTES 
//new Set(): this method in js create new set object. a set object is a collection of unique values.it can store any type of value, whether primitive values or object references
//if we onlu use new Set() method we gate the only unique elements of the array as an set but with set we use the spread operator which return the new array.


const removeDuplicateInteger=(arr)=>{
       let newArr = [...new Set(arr)];
       return newArr;
    }
console.log(removeDuplicateInteger([1,1,2,3,3,4,-1,-1]))



