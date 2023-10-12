function calculatorRank(win, defeat) {
  let rankedBalance = win - defeat;
  return rankedBalance;
}

let result = calculatorRank(win = 98, defeat = 52);
let rank = "";

if (result < 10) {
  rank = "ferro";
} else if (result >= 11 && result <= 20) {
  rank = "bronze";
} else if (result >= 21 && result <= 50) {
  rank = "prata";
} else if (result >= 51 && result <= 80) {
  rank = "ouro";
} else if (result >= 81 && result <= 90) {
  rank = "diamante";
} else if (result >= 91 && result <= 100) {
  rank = "lendário";
} else if (result >= 101) {
  rank = "imortal";
}

console.log("O herói tem o saldo de vitórias ranqueadas de " + result + ", está no rank " + rank + " com um total de " + win + " vitórias e " + defeat + " derrotas!");