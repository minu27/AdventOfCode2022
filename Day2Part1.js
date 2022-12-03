const fs = require('fs')

function rockPaperScissors(game) {
    let totalScore = 0;
    for (let i=0;i<game.length;i++) {
        let player1 = game[i].charAt(0);
        let player2 = game[i].charAt(2);
        let outcome = 0; let score = 0;
        // Player 2 Lost case
        if((player2 == 'X' && player1 == 'B') || (player2 == 'Y' && player1 == 'C') || (player2 == 'Z' && player1 == 'A')) {
            outcome = 0;

        } 
        // Player 2 Draw case
        if((player2 == 'X' && player1 == 'A') || (player2 == 'Y' && player1 == 'B') || (player2 == 'Z' && player1 == 'C')) {
            outcome = 3; 
        } 
        // Player 2 Win case
        if((player2 == 'X' && player1 == 'C') || (player2 == 'Y' && player1 == 'A') || (player2 == 'Z' && player1 == 'B')) {
            outcome = 6;
        } 

        //Shape score
        if(player2 == 'X') {
            score = 1;
        } else if (player2 == 'Y') {
            score = 2;
        } else {
            score = 3;
        }

        let roundScore = outcome + score;
        totalScore += roundScore;

    }
    return totalScore;
}

let sampleStrategy = ['A Y','B X','C Z'];
console.log("Score = "+rockPaperScissors(sampleStrategy)); //15

let inputStrategy = fs.readFileSync("./inputs/Day2input.txt", 'utf8').split("\n");
console.log("Score = "+rockPaperScissors(inputStrategy)); //13221

