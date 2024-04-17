// 누적합 - 파괴되지 않은 건물
function solution(board, skill) {
  var answer = 0;
  let temp = Array.from(Array(board.length + 1), () =>
    Array(board[0].length + 1).fill(0)
  );

  for (let i = 0; i < skill.length; i++) {
    //마킹
    [type, r1, c1, r2, c2, degree] = skill[i];
    if (type == 1) {
      temp[r1][c1] -= degree;
      temp[r2 + 1][c1] += degree;
      temp[r1][c2 + 1] += degree;
      temp[r2 + 1][c2 + 1] -= degree;
    }
    if (type == 2) {
      temp[r1][c1] += degree;
      temp[r2 + 1][c1] -= degree;
      temp[r1][c2 + 1] -= degree;
      temp[r2 + 1][c2 + 1] += degree;
    }
  }
  //누적합
  //행 기준
  for (let i = 0; i < temp.length - 1; i++) {
    for (let j = 0; j < temp[0].length - 1; j++) {
      temp[i][j + 1] += temp[i][j];
    }
  }
  //열 기준
  for (let j = 0; j < temp[0].length - 1; j++) {
    for (let i = 0; i < temp.length - 1; i++) {
      temp[i + 1][j] += temp[i][j];
    }
  }

  //temp 와 board 더하기
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] += temp[i][j];
      if (board[i][j] > 0) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
);
