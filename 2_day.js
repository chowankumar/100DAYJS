 
    //you are required to implement a function generateHash the generates a hasg tag from a given input string.

    //?hash tag should be constructed as follows:
    //the input string should be converted to hash tag format, where each word is capitalized and concatenated together without spaces.

    //if the length of the input string is greater than 280 charaters or if the string is empty or contains only whitespaces, the function should return false.

    //otherwise the function should return the generated hash tag prefixed with #.

    //inputt : my name is chowan kumar
    //output : #MyNameIsChowanKumar


    const generateHash = (str) => {

        //check if length is greater than 280 and after trimig length of the string
        if (str.length > 280 || str.trim().lenght === 0) {
            return false;
        }


        //convert it into the array
        str = str.split(" ")


        //changer 1st letter in upper case
        str = str.map((currElm) => currElm.replace(currElm[0], currElm[0].toUpperCase()))


        //change in to string
        //if we cannot pass "" then it apply comma between the word but if we pass "" then it will remove the comma.
        str = str.join("");

        //add the # in the string
        str = `#${str}`



        return str;
















        
        //solution two

        // str = str.split(" ")

        // str = str.map((currElm) => currElm.charAt(0).toUpperCase() + currElm.slice(1))
        // str = str.join("");

        // str = `#${str}`

        // return str




    }
    console.log(generateHash("my name is chowan kumar"))
 