//9012 - 괄호 (실버4)
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split("\n");
let num = Number(input[0]);
let inputArr = [];
for (let i = 1; i <= num; i++) {
  inputArr.push(input[i].split(""));
}

for (let i = 0; i < num; i++) {
  let stack = [];
  let flag = false;
  let cur = inputArr[i];
  for (let j = 0; j < cur.length; j++) {
    if (cur[j] == "(") {
      stack.push("(");
    } else {
      if (stack.length == 0) {
        console.log("NO");
        flag = true;
        break;
      }
      stack.pop();
    }
  }
  if (flag) continue;
  if (stack.length > 0) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
