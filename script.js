// Day 4 Task 

// Q1. print odd numbers

// anonymus function

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var EmptyArray =[];
var fun = function (odd){
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2!==0){
            EmptyArray.push(numbers[i])
        }
    }
    return EmptyArray
}
console.log(fun());


// IIFE function

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
(function array() {
  var newArray =[];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
     newArray.push(arr[i])
    }
  }
  console.log(newArray);
})
  ();

//arrow function

var arrow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var blank =[];
var arrFun = (odd)=>{
    for(let i=0; i<arrow.length; i++){
        if(arrow[i]%2!==0){
            blank.push(arrow[i])
        }
    }
    return blank;
}
console.log(arrFun());






//Q5 Return all the palindromes in an array:

// Anonymus function:


