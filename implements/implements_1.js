//2502 - 떡 먹는 호랑이(실버1)

let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((v) => Number(v));

const day = input[0];
const total = input[1];

let numArr =[[], [1,0], [1,1]];

for (var i=3;i<day ;i++){
    const prev1 = numArr[i-1];
    const prev2=numArr[i-2];

    numArr[i] = [prev1[0]+ prev2[0], prev1[1]+prev2[1]]
    
}

const [b,a] =numArr[day-1]

for (var i=1;i<total; i++){
    const n1 = a*i;
    for (var j=1;j<total;j++){
        const n2 = b*j;
        const sum = n1+n2;
        if (sum == total){
            //정답
            console.log(i);
            console.log(j);           
            return;
        }
        if (sum > total){
            break;
        }
    }
}
