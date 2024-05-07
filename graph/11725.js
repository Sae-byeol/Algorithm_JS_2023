//11725 - 트리의 부모 찾기(실버2)
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);
let visited = Array.from({ length: n + 1 }, () => 0);
let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < n; i++) {
  let [n, m] = input[i].split(" ").map((v) => Number(v));
  graph[n].push(m);
  graph[m].push(n);
}
let answer = Array.from({ length: n + 1 }, () => 0);
function dfs(num) {
  let cur = graph[num];
  for (let i = 0; i < cur.length; i++) {
    if (visited[cur[i]] == 0) {
      visited[cur[i]] = 1;
      answer[cur[i]] = num;
      dfs(cur[i]);
    }
  }
}
//start
visited[1] = 1;
dfs(1);
console.log(answer.slice(2).join("\n"));
