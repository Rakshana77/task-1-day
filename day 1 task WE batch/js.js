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
    function thirteen(a) {
        if (Math.floor(a % 13 == 0)) {
            console.log('yes')
        }
        else {
            console.log('no')
        }
    
    }
    let a=parseInt(userInput[0].split(' '))
    thirteen(a)
  

  //end-here
});