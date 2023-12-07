//Q2.Convert all the strings to title caps in a string array:-

//Anonymus function:

let titleCase = function () {
    let str=("mern stack developer".toLowerCase().split(" "));
  
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
  }
  titleCase();
  
  //IIFE function:
  
  (function caps(){
    let tCaps=("mern stack".toLowerCase().split(" "));
  
  for (let i = 0; i < tCaps.length; i++) {
    tCaps[i] = tCaps[i].charAt(0).toUpperCase() + tCaps[i].slice(1); 
  }
  console.log(tCaps.join(" "));
  })
  ();
  
  // Arrow function:
  
  const tittle=()=>{
    let str=("full stack developer".toLowerCase().split(" "));
  
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
  }; 
  tittle();
  