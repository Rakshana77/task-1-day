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
    let size = parseInt(userInput[0].split(' '))
    let sum=2
  console.log(sum)
    for (let i = 0; i <= size; i++){
        for (let j = 2; j <= 20; j + 3) {
            sum = sum + j
        } 
      console.log(sum) 
    }
   
  
  //end-here
});