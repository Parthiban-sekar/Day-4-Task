// 3.Sum of all numbers in an array:-

// Anonymus function:

const arr = [10, 20, 30, 40];
const sum = arr.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum); 

//IIFE function:

(function(){
let str=[97,45,68];
let sum=0;
 for (let i=0; i<str.length; i++) {
 sum += str[i];
}
console.log(sum);
})
();

// Arrow function:

const add=()=>{
let str=[25,35,45,75,65];
let add=0;
 for (let i = 0; i < str.length; i++) {
add +=str[i];
}
console.log(add);
};
add();