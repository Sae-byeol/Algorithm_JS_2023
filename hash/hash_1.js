// 프로그래머스 - 완주하지 못한 선수 (Lv1)
function solution(participant, completion) {
    var answer = '';
    
    participant.sort();
    completion.sort();
    
    //let -> var 사용 시 시간 효율성 good
    for(var i=0; i< completion.length; i++){
        if (completion[i] !== participant[i]){
            answer=participant[i]; 
            break;
        }
    }
    if (answer === ''){
        answer = participant[participant.length -1];
    }
    return answer;
}