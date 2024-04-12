//QUESTION:
//write the function called calculateAverage that takes an arrayof number as input and returns the average of those numbers.

//CONSTRAINTS:
//Accept an array of number as input.
//calculate the sum of all the number in the array.
//divide the sum by the total number of elements in the array to fint the average.
//return the calculated average.

const calculateAverage = (arr) => {
    let total = arr.reduce((accum, curElem) => accum + curElem, 0)
    return total / arr.length;
}


console.log(calculateAverage([5, 7, 6, 5]))
