// Q6.Remove duplicates from an array:-

//anonymous function:

const remove=   function(){
  let chars = [1,2,3,1,5,5];
   let uniqueChars = [...new Set(chars)];
    
    console.log(uniqueChars);
    };
    remove();  

 //IIFE function:

 (function(){
   
    let chars = [1,2,3,1,5,5];
    let uniqueChars = [...new Set(chars)];
    console.log(uniqueChars);
        
  })();    