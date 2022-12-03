const fs = require('fs')

function countSackItems(items) {
    let count = 0;
    let value = 0;
    for(let i=0; i<items.length; i++) {
        compartment1 = items[i].slice(0, items[i].length/2);
        compartment2 = items[i].slice(items[i].length / 2, items[i].length);
        let item = '';
        for (let x in compartment1) {
            compartment2.includes(compartment1[x])?item = compartment1[x]:'';
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
console.log("Total Items Value = "+countSackItems(sampleArray)); //157

let inputArray = fs.readFileSync("./inputs/Day3input.txt", 'utf8').split("\n");
console.log("Total Items Value = "+countSackItems(inputArray)); //7763

