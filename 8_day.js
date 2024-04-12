//QUESTION:
//write the function that takes a non-negative integer number as input and return its factorial. the factorial of a non-negative integer n,denoted as n!, is the product of all positive integers less than or equal to n . the factorial of 0 is defined as 1.

const factorialFinder = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = + fact * i;
    }
    return fact;
}
console.log(factorialFinder(3))


