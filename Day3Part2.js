const fs = require('fs')

function countSackItems(items) {
    let count = 0;
    let value = 0;
    for(let i=0; i<items.length; i=i+3) {
        let sack1 = items[i].trim();
        let sack2 = items[i+1].trim();
        let sack3 = items[i+2].trim();
        
        let item = '';
        for (let x in sack1) {
            if (sack2.includes(sack1[x]) && sack3.includes(sack1[x])) {
                item = sack1[x];
            }
        }
        
        if(item == item.toLowerCase()) {
            value = item.charCodeAt(0)-96;
        } else {
            value = item.charCodeAt(0)-38;
        }
        count += value;
    }
    return count;
}

let sampleArray = ['vJrwpWtwJgWrhcsFMMfFFhFp','jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL','PmmdzqPrVvPwwTWBwg','wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn','ttgJtRGJQctTZtZT','CrZsJsPPZsGzwwsLwLmpwMDw'];
console.log("Total Items Value = "+countSackItems(sampleArray)); //70

let inputArray = fs.readFileSync("./inputs/Day3input.txt", 'utf8').split("\n");
console.log("Total Items Value = "+countSackItems(inputArray)); //2569

