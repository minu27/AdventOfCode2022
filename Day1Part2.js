const fs = require('fs')

function countCalories(numberArray) {
    let calories = [];
    let count = 0;
    for (let i=0;i<numberArray.length;i++) {
        if(numberArray[i] == '') {
            calories.push(count);
            count = 0;
        } else {
            count += numberArray[i];
        }
    }
    if (count != 0) {
        calories.push(count);
    }
    calories.sort((a,b)=>b-a);
    return (calories[0]+calories[1]+calories[2]);
}

let sampleArray = [1000,2000,3000,'',4000,'',5000,6000,'',7000,8000,9000,'',10000];
console.log("Max = "+countCalories(sampleArray)); //45000

let input = fs.readFileSync("./inputs/Day1input.txt", 'utf8').split("\n");
let inputArray = input.map(Number);
console.log("Max = "+countCalories(inputArray)); //202346
