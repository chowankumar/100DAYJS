 //FUNCTION:
 //write the function to determine whether a given string is a palindrome or not. a palindrom is a word, phrase,number or other swquence of character that reads the same forward and backward, ignoring spaces,punctuation and capatilization.

//CONSTRAINTS:
//the input string may contain letters,digits,spaces,punctuation,and special characters.
//function should be case insensitive,meaning"Chowan" and "chowan" cosidered as same.
//ignore spaces,punctuation and special character when determining if a string is a palindrome.
//the function should return true if the input string is palindrome and return false if it is not.

//NOTES:
//.replace(/\W/g, ""): uses the replace() method with a regular expression (/\W/g) to remove all the nonword charcter from the STRING.
// \W matches any non-word character equivalen to [^a-zA-Z0-9_].
//THE g FLAG PERFOR,S A GLOVAL SEARCH MEANING IT REPLACES ALL OCCURENCES OF NON-WORD character in the string.
//so replace (/\W/g, "") replaces all non word charcters with an empty string,effectively remong them from the string


    const isPalindrome=(str)=>{
        str = str.toLowerCase().replace(/\W/g, "");
        //reverse the string
        let r_str = str.split("").reverse().join("");
        return str === r_str ?true:false;
     }
    console.log(isPalindrome("1221"));
    console.log(isPalindrome("ee ee ee"))



    
 