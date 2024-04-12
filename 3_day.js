//QUESTION:
//write the function called charCount that takes two parameters :a string a character to count. the function should return the number of times the specified character appear in the string

//CONSTRAINTS:
//function should handle both lower and upper case
//the function should accept any charcter that is part of the ASCII character set and is printtable

const charCount = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();
    totalCount = word.split("").reduce((accum, currChar) => {
        if (currChar === char) {
            accum++;
        }
        return accum;
    }, 0);
     return totalCount;
}
console.log(charCount("chowan kumar", "a"))

