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
    let arr1 = (userInput[1].split(' '))
    let freq = {}
    
    for (let val in arr1) {
        arr1[val] = Number(arr1[val])
        
    }
    for (let i = 0; i < num; i++){
        if (freq[ arr1[i] ]=== undefined){
    freq[arr1[i]]=1
        }
        else {
            freq[arr1[i]]=freq[arr1[i]]+1
        }
    }
  console.log(freq);
    let min = freq[arr1[0]]
    let minval = arr1[0];
    for (let key in freq[arr1]){
        if (min > freq[arr1[key]]) {
            min = freq[arr1[key]];
            minval=key
        }
    }
    min
     let minvalue=[]
    for (let key in freq[arr1]){
        if (min < freq[arr1[key]]) {
            min = freq[arr1[key]];
            minvalue.push(key)
        }
    }
    
    console.log(min+','+minvalue)
  //end-here
});