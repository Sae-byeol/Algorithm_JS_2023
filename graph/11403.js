//11403 - 경로찾기(실버1)
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split("\n");
const n = Number(input[0]);
let inputArr = [];
let visited = Array.from({ length: n }, () => 0);
for (let i = 1; i <= n; i++) {
  inputArr.push(input[i].split(" ").map((v) => Number(v)));
}

function dfs(num) {
  for (let i = 0; i < n; i++) {
    if (inputArr[num][i] == 1 && visited[i] == 0) {
      visited[i] = 1;
      dfs(i);
    }
  }
}

for (let i = 0; i < n; i++) {
  dfs(i);
  console.log(...visited);
  visited = Array.from({ length: n }, () => 0); //visited 초기화
}
