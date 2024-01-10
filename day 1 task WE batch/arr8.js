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
 let size = (userInput[0].split(' '))
    let mark = parseInt(size[1].split(' '))
    let arr = userInput[1].split(' ')
    for (let value of arr) {
        parseInt(value)
    }
    for (let i = 0; i < size; i++){
        if (mark == arr[i]) {
            return arr[i]
        }
        else {
            return -1
        }
    }
 

  //end-here
});