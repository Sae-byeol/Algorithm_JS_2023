// 프로그래머스 - 전화번호 목록 (Lv.2)
function solution(phone_book) {
    var answer = true;
    phone_book.sort()

    for (var i=0;i<phone_book.length-1;i++){
        const cur = phone_book[i];
        for (var j=i+1; j<phone_book.length; j++ ){
            const str = phone_book[j].slice(0,cur.length)
            if (cur !== str){
                break;
            }
            if (cur === str){
                return false;
            }
        }
    }
    return answer;
}