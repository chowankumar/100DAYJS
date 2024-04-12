
    //write the function which return the longest word in the string 

    //NOTES==> if the input contain the empty only or whitespace function should return false and function should ignore leading and trailing whitespace when determining the longest word



    const findtheLongestword = (str) => {
        if (str.trim().length === 0) {
            return false;
        }

        //if we give space like that " " we will get full word in the sentence  we get an array and if we only write "" we get characters 
        word = str.split(" ");


        

        //this sort function sort these values on the bases of the UNICODE VALUES A/Z a/z,capital comes first then small charcter come
        //if we pass two parameters in the sort function with arrow function it will work like the comparison function, a-b give ascending order b-a give ascending order
        word = word.sort((a, b) => a.length - b.length);


        //if we want to find the last element of the array then we pass -1 as index number
        return word.at(-1);

















        //thsi is second method using reduce method
        //  word = str.split(" ");
        //  return word.reduce((accum,currWord)=>(currWord.length>accum.length?currWord:accum),"")

    }

    console.log(
        findtheLongestword("my name is chowaan kumar")
    )

