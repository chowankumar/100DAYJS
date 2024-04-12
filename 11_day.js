//QUESTION:
//write a function that takes a number as input and returns the sum of its digits.

//CONSTRAINTS:
//input numbers always be positive number
//input number can have multiple digits
//output should be the sum of all digit in the input number

//NOTES
// if we want to sum average or any   operation which have answer a single digit then we use "REDUCE" method. This method applied to the array not on the number.we can change in the array and in the String format like : Array.from(Sting(num));

sumOfDigits = (num) => {
    let arr = Array.from(String(num), Number);
    return arr.reduce((accum, curElem) => accum += curElem, 0)
}
console.log(sumOfDigits(1234));
