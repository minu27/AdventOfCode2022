const fs = require('fs')

function getCleanupPairs(pairs) {
    let countOverlaps = 0;
    for(let i=0; i<pairs.length; i++) {
        let overlap = 0;
        let pair = pairs[i].split(',');
        let pair1 = pair[0].split('-');
        let pair2 = pair[1].split('-');
        console.log("Pair 1 = "+pair1[0]+" and "+pair1[1]);
        console.log("Pair 2 = "+pair2[0]+" and "+pair2[1]);
        
        if (parseInt(pair2[0]) >= parseInt(pair1[0]) && parseInt(pair2[1]) <= parseInt(pair1[1])) {
            if (overlap == 0){
                overlap = 1;
            }
        } 
        
        if(parseInt(pair1[0]) >= parseInt(pair2[0]) && parseInt(pair1[1]) <= parseInt(pair2[1])) {
            if (overlap == 0){
                overlap = 1;
            }
        }
        console.log("--------------------  "+overlap);
        countOverlaps += overlap;
    }
    return countOverlaps;
}

let sampleArray = ['2-4,6-8','2-3,4-5','5-7,7-9','2-8,3-7','6-6,4-6','2-6,4-8'];
console.log("Total Pairs = "+getCleanupPairs(sampleArray)); //2

let inputArray = fs.readFileSync("./inputs/Day4input.txt", 'utf8').split("\n");
console.log("Total Pairs = "+getCleanupPairs(inputArray)); //456

