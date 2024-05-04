// 10816 - 숫자카드2(실버4)
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split("\n");
const n = Number(input[0]);
const cardArr = input[1].split(" ").map((v) => Number(v));
const m = Number(input[2]);
const numArr = input[3].split(" ").map((v) => Number(v));

let answer = [];
let map = new Map();

cardArr.forEach((card) => {
  if (map.has(card)) {
    map.set(card, map.get(card) + 1);
  } else {
    map.set(card, 1);
  }
});

numArr.forEach((num) => {
  if (map.has(num)) {
    answer.push(map.get(num));
  } else {
    answer.push(0);
  }
});

console.log(...answer);
