// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
    let num = parseInt(userInput[0].split(' '))
    let size1 = parseInt(userInput[1].split(' '))
    for (let i = 0; i < num; i++){
        for (let j = 0;j<size)
    let arr1 = (userInput[2].split(' '))
   let size2 = parseInt(userInput[3].split(' '))
    let arr2 = (userInput[4].split(' '))
    let size3 = parseInt(userInput[5].split(' '))
    let arr3 = (userInput[6].split(' '))
    for (let i = 0; i < size1;i++){
    
    for (let val in arr1) {
        arr1[val] = Number(arr1[val])
        
    }
    for (let val in arr2) {
        
        arr2[val] = Number(arr2[val])
        
    }
    for (let val in arr3) {
        
        
           arr3[val]=Number(arr3[val])
    }
    // function sort(a, b) {
    //     return a - b;
    // }


  
    arr1=(arr1.sort());
  arr2=(arr2.sort());
    arr3 = (arr3.sort());
    
   let res=arr1.concat(arr2)
    let final = res.concat(arr3)
    console.log(final)
  //end-here
});