//10799 - 쇠막대기(실버2)
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().trim();
let inputArr = input.split("");

let stack = [];
let answer = 0;
for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] == "(") {
    stack.push(inputArr[i]);
  } else {
    //레이저인경우
    stack.pop();
    if (inputArr[i - 1] == "(") {
      answer += stack.length;
    } else {
      answer += 1;
    }
  }
}

console.log(answer);
