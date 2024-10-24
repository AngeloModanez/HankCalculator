const readlineSync = require('readline-sync');

function rankCalculator(wins, losses) {
    let winBalance = wins - losses;
    let level = "";

    switch (true) {
        case (wins <= 10):
            level = "Ferro";
            break;
        case (wins > 10 && wins <= 20):
            level = "Bronze";
            break;
        case (wins > 20 && wins <= 50):
            level = "Prata";
            break;
        case (wins > 50 && wins <= 80):
            level = "Ouro";
            break;
        case (wins > 80 && wins <= 90):
            level = "Diamante";
            break;
        case (wins > 90 && wins <= 100):
            level = "Lendário";
            break;
        case (wins >= 100):
            level = "Imortal";
            break;
    }

    console.log(`\nO Herói ${winBalance} está no nível ${level}`);
}

let wins = readlineSync.question('\nDigite a Quantidade de Vitorias: ');
let losses = parseInt(readlineSync.question('\nDigite a quantidade de Derrotas: '));

rankCalculator(wins, losses);