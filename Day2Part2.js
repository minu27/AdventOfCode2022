const fs = require('fs')

function rockPaperScissors(game) {
    let totalScore = 0;
    for (let i=0;i<game.length;i++) {
        let player1 = game[i].charAt(0);
        let player2 = game[i].charAt(2);
        let outcome = 0; let score = 0;
        if(player2 == 'X') { // Player 2 Lost case
            if (player1 == 'A') {
                //Be scissor for rock
                score = 3;
            } else if (player1 == 'B') {
                //Be Rock for paper
                score = 1;
            } else {
                //Be Paper for scissor
                score = 2;
            }
            outcome = 0;
        } else if (player2 == 'Y') { //Player 2 Draw case
            if (player1 == 'A') {
                //Be rock for rock
                score = 1;
            } else if (player1 == 'B') {
                //Be paper for paper
                score = 2;
            } else {
                //Be scissor for scissor
                score = 3;
            }
            outcome = 3;
        } else { //Player 2 Win case
            if (player1 == 'A') {
                //Be paper for rock
                score = 2;
            } else if (player1 == 'B') {
                //Be scissor for paper
                score = 3;
            } else {
                //Be rock for scissor
                score = 1;
            }
            outcome = 6;
        }
        let roundScore = outcome + score;
        totalScore += roundScore;
    }
    return totalScore;
}

let sampleStrategy = ['A Y','B X','C Z'];
console.log("Score = "+rockPaperScissors(sampleStrategy)); //12

let inputStrategy = fs.readFileSync("./inputs/Day2input.txt", 'utf8').split("\n");
console.log("Score = "+rockPaperScissors(inputStrategy)); //13131

