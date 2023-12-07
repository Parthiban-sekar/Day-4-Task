// Q5.Return all the palindromes in an array

//Anonymus function:

function isPalindrome(str) {
    var j = str.length - 1;
    for (var i = 0; i < str.length / 2; i++) {
      if (str[i] != str[j]) {
        return false;
      }
      j--;
    }
    return true;
  }
  
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("nitin")); 
  console.log(isPalindrome("Rama")); 

  // IIFE function:

  let isPalindrome = (function() {
    function reverseString(str) {
      return str.split("").reverse().join("");
    }
  
    return function(str) {
      return str === reverseString(str);
    };
  })();
  
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("nitin")); 
  console.log(isPalindrome("Rama")); 
  
  // Arrow function:

  const isPalindrome = (str) => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  };
  
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("nitin")); 
  console.log(isPalindrome("Rama")); 
  

  