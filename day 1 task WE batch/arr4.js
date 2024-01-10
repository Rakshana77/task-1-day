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
  let arr = userInput[1].split(' ')
  let size2 = parseInt(userInput[2].split(' '))
  let arr1=userInput[3].split(' ')
    let freq = {}
    for (let i = 0; i < size; i++){
        arr[i]=parseInt(arr[i])
  }

     for (let i = 0; i < size2; i++){
        arr1[i]=parseInt(arr1[i])
    }
    for (let i = 0; i < size; i++){
        if (freq[arr[i]] === undefined) {
            freq[arr[i]] = 0; 
        }
       
    }
    for (let i = 0; i < size; i++){
  
            freq[arr[i]]++;    
    }
    let frequencies = Object.entries(freq)
    frequencies.sort((a,b)=>a[1]-b[1])

  for (let i = 0; i < freq.length; i++) {
    if (Object.values(freq[i]) == 1) {
      console.log(Object.keys(freq[i]))
    }
  }
  //end-here
});