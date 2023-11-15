// 프로그래머스 - 가장 큰 수 (Lv2)
function solution(numbers) {
    var answer = '';
    numbers.sort((a,b)=> `${b}${a}` - `${a}${b}`)
    answer = numbers.join('')
    if (answer[0] == '0'){
        answer='0';
    }
    return answer;
}
