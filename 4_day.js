//QUESTION :
//write a function called checkTriangleType that takes three parameters respresenting the length of the side of triangle. the function should return a string indicating the type of triangle : "equivalent", "isosceles", or "scalene"

//CONSTRAINTS:
//1 if all side are of  equal  length return "equilateral".
//2 if only two side are of equal length return "isosceles"
//3 if all three sides have different length return "scalene"

const checkTriangleType=(s1,s2,s3)=>{
    if(s1===s2&s2===s3){return "equilateral"}
     if(s1===s2 || s2===s3 || s1===s3 ){return "isosceles"}
     if(s1!==s2 || s2!==s3 || s1!==s3 ){return "scalene"}
    }
    console.log(checkTriangleType(3,3,3));
    console.log(checkTriangleType(3,4,3));
    console.log(checkTriangleType(2,3,4));

 