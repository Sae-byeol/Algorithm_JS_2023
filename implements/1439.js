//문자열 - 1439(실버5)
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString();

const n = input.split("").map((v) => Number(v));
const arr = [];
for (let i = 0; i < n.length; i++) {
  if (i == 0) {
    arr.push(n[0]);
    continue;
  }
  if (arr[arr.length - 1] != n[i]) {
    arr.push(n[i]);
  }
}

let oneCnt = 0;
let zeroCnt = 0;
arr.forEach((a) => {
  if (a == 0) {
    zeroCnt++;
  } else {
    oneCnt++;
  }
});

console.log(Math.min(zeroCnt, oneCnt));
