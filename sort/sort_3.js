// 프로그래머스 - H-Index (Lv2)
function solution(citations) {
    var answer = 0;
    citations.sort((a,b) => b-a)
    var h= citations[0]; //h 시작 값
    
    while(h >= 0){
        filteredArr = citations.filter((n)=> n >= h);
        if (filteredArr.length >= h){
            return h;
        }else{
            h--;
        }
    }
    return answer;
}