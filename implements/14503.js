// 14503 - 로봇청소기(골드5)
let fs = require("fs");
//백준에 업로드 할때에는 readFileSync 안의 값을 '/dev/stdin'으로 해야 처리가 된다.
let input = fs.readFileSync("input.txt").toString().split("\n");
let [n, m] = input[0].split(" ").map((v) => Number(v));
let [r, c, d] = input[1].split(" ").map((v) => Number(v));
let inputArr = [];
for (let i = 0; i < n; i++) {
  inputArr.push(input[2 + i].split(" ").map((v) => Number(v)));
}

let isCleaned = Array.from({ length: n }, () => Array(m).fill(0));
function isOutRange(x, y) {
  if (x < 0 || y < 0 || x >= n || y >= m) return true;
  return false;
}
function rotate(x, y, direction) {
  if (direction == 0) {
    return [x, y - 1, 3];
  } else if (direction == 1) {
    return [x - 1, y, 0];
  } else if (direction == 2) {
    return [x, y + 1, 1];
  } else if (direction == 3) {
    return [x + 1, y, 2];
  }
}
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let answer = 0;

function clean(curX, curY, direction) {
  // 도착한 위치가 벽이라면
  if (inputArr[curX][curY] == 1) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (isCleaned[i][j] == 1) answer++;
      }
    }
    return;
  }
  //현재 위치 청소 가능하다면
  if (inputArr[curX][curY] == 0 && isCleaned[curX][curY] == 0) {
    isCleaned[curX][curY] = 1;
  }
  //주변 탐색
  let hasDirty = false;
  for (let i = 0; i < 4; i++) {
    let _x = dx[i] + curX;
    let _y = dy[i] + curY;
    if (isOutRange(_x, _y)) continue;
    if (inputArr[_x][_y] == 0 && isCleaned[_x][_y] == 0) {
      hasDirty = true;
      break;
    }
  }
  if (hasDirty) {
    //청소할 곳 있다면 => 반시계 90도 회전, 앞쪽에 청소할 칸 있는지 확인
    [x, y, direct] = rotate(curX, curY, direction);
    if (inputArr[x][y] == 0 && isCleaned[x][y] == 0) {
      clean(x, y, direct);
    } else {
      for (let n = 0; n < 3; n++) {
        [x, y, direct] = rotate(curX, curY, direct);
        if (inputArr[x][y] == 0 && isCleaned[x][y] == 0) {
          clean(x, y, direct);
          break;
        }
      }
    }
  } else {
    //청소할 곳 없다면 => 방향 유지, 한 칸 후진
    if (direction == 0) {
      clean(curX + 1, curY, direction);
    } else if (direction == 1) {
      clean(curX, curY - 1, direction);
    } else if (direction == 2) {
      clean(curX - 1, curY, direction);
    } else if (direction == 3) {
      clean(curX, curY + 1, direction);
    }
  }
}

clean(r, c, d);
console.log(answer);
