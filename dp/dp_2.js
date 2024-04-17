// 프로그래머스 - 땅따먹기
function solution(land) {
  var answer = 0;
  let dpArr = Array.from(Array(land.length), () => Array(4).fill(0));

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (i == 0) {
        dpArr[i][j] = land[i][j];
        continue;
      }
      for (let n = 0; n < 4; n++) {
        if (j == n) {
          continue;
        }
        dpArr[i][j] = Math.max(dpArr[i - 1][n] + land[i][j], dpArr[i][j]);
      }
    }
  }
  answer = Math.max(...dpArr[land.length - 1]);
  return answer;
}
