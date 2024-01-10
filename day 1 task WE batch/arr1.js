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
    let a = parseInt(userInput[0].split(' '))
    let i = 0
    let power=1
    while (power <= a) {
        power = 2 ** i
        i++
    }
  console.log(power);

  //end-here
});