// 4.Return all the prime numbers in an array:

//Anonymus function:

let prime = function (l,n){
    let arr = [];
    for (i=l; i<n; i++)
    {
        arr.push(i)
    }
arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
    console.log(arr);
}
prime(1,100);

//IIFE function:

(function (l,n)

{
    let arr = [];
    for (i=l; i<r; i++)
    {
        arr.push(i)
    }
arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
    console.log(arr);
})(100,200)

// Array function:

const primeNum=()=>{
  var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
     
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 };
 primeNum();