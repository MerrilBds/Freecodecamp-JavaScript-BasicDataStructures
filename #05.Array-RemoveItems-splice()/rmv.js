/*
We've initialized an array arr. Use splice() 
to remove elements from arr, 
so that it only contains elements that sum to the value of 10.

*/
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(0, 2); //[5,1,7,5,2,1]
arr.splice(1, 2); //[5,5,2,1]
arr.splice(2, 2);//[5,5]
//arr.splice(1,4); //[2,5,2,1]


console.log(arr);