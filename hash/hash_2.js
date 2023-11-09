// 프로그래머스 - 폰켓몬 (Lv1)
function solution(nums) {
    var answer = 0;
     const num = nums.length/2;
    //배열 중복제거
    const set = new Set(nums);
    const uniqueArr = [...set];
   
    if (num < uniqueArr.length){
        answer = num;
    }else{
        answer= uniqueArr.length
    }
    
    return answer;
}