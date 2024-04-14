//QUESTION:
//Write a function called isPoerofTwo that takes an integer num as input and return true if num is a power of two, and false otherwise.

//CONSTRAINTS:
//the input num will be postive integer.
//Zero and negative integer are not considered power of two.
//function should return true if the number is power of 2, and false otherwise.


const isPoerofTwo=(num)=>{
    let output = false;
    for(let i=1;i<num;i++){
        if(2**i === num){
            output = true;
        }
    }
    return open;
}
