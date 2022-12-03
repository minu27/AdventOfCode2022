const fs = require('fs')

function countCalories(numberArray) {
    let compareTo = 0;
    let count = 0;
    for (let i=0;i<numberArray.length;i++) {
        if(numberArray[i] == '') {
            if(compareTo == 0) {
                compareTo = count;
                count = 0;
            } else {
                compareTo = Math.max(count, compareTo);
                count = 0;
            }
        } else {
            count += numberArray[i];
        }
    }
    return compareTo;
}

let sampleArray = [1000,2000,3000,'',4000,'',5000,6000,'',7000,8000,9000,'',10000];
console.log("Max = "+countCalories(sampleArray)); //24000

let input = fs.readFileSync("./inputs/Day1input.txt", 'utf8').split("\n");
let inputArray = input.map(Number);
console.log("Max = "+countCalories(inputArray)); //69501

