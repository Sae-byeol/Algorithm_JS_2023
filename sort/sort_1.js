//프로그래머스 - K번째 수 (Lv1)
function solution(array, commands) {
    var answer = [];
    for (var i=0;i<commands.length; i++){
        const [n1, n2, k] =  commands[i];
        answer[i] = array.slice(n1-1, n2).sort((a,b)=> a-b)[k-1];
    }
    return answer;
}