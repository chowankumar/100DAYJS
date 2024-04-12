//QUESTION => WRITE THE FUNCTION WHICH TAKE THE STRING AS INPUT AND RETURN THE COUNT OF THE NUMBER OF VOWELS.STRING CONTAIN BOTH UPPER AND LOWER CASE LETTER.

//NOTES:
//includes : thing is present in the array or not

const countVowel = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let arr = str.split('');
    for (let char of arr) {
        if (vowels.includes(char.toLowerCase())) { count++; }
    }
    return count;
}
console.log(countVowel("i am chowan"))

