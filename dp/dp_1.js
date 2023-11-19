// 프로그래머스 - 정수 삼각형 (Lv3)
function solution(triangle) {
    var answer = 0;
    const length = triangle.length;
    var dp = new Array(length).fill(0).map(() => new Array(length).fill(0));

    dp[0][0] = triangle[0][0];
    
    for (var i=1;i<triangle.length; i++){
        for (var j=0;j<triangle.length; j++){
            const num = triangle[i][j];
            if (j==0){
                //처음
                dp[i][j] = dp[i-1][0] + num;
            }
            else if (j == i){
                //끝
                dp[i][j] = dp[i-1][j-1] + num;
            }
            else{
                // 중간
                dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + num;
            }
        }
    }
        console.log(dp[length -1 ])
    answer = Math.max(...dp[length -1 ])
    return answer;
}