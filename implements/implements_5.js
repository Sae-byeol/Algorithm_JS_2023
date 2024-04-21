// 구현 - 배달과 수거하기 (Lv2)
function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let haveToDeliver = 0;
  let haveToPick = 0;
  for (let i = deliveries.length - 1; i >= 0; i--) {
    haveToDeliver += deliveries[i];
    haveToPick += pickups[i];
    while (haveToDeliver > 0 || haveToPick > 0) {
      //둘 중 하나라도 양수인 동안은 음수가 될 때까지 물류창고 다녀오기
      answer += (i + 1) * 2;
      //다녀온 후, 해당 집 배달 및 수거 진행
      haveToDeliver -= cap;
      haveToPick -= cap;
    }
  }
  return answer;
}
