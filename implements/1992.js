//1992 - 쿼드트리(실버1)
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split("\n");
let inputN = Number(input[0]);
let inputArr = [];
for (let i = 1; i <= inputN; i++) {
  inputArr.push(input[i].split("").map(Number));
}

let answer = [];

function merge(startX, startY, num) {
  let total = 0;

  for (let i = startX; i < startX + num; i++) {
    for (let j = startY; j < startY + num; j++) {
      total += inputArr[i][j];
    }
  }

  //다 1이거나 0
  if (total == num * num) answer.push(1);
  else if (total == 0) answer.push(0);
  //다른 경우 => 재귀
  else {
    answer.push("(");
    num /= 2;
    merge(startX, startY, num);
    merge(startX, startY + num, num);
    merge(startX + num, startY, num);
    merge(startX + num, startY + num, num);
    answer.push(")");
  }
}

merge(0, 0, inputN);
console.log(answer.join(""));
