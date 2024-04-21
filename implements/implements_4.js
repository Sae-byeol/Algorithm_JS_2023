// 프로그래머스 - 광물 캐기 (Lv2)
function solution(picks, minerals) {
  var answer = 0;
  let dia_pick = picks[0];
  let iron_pick = picks[1];
  let stone_pick = picks[2];

  const dia_pick_fatigue = {
    diamond: 1,
    iron: 1,
    stone: 1,
  };
  const iron_pick_fatigue = {
    diamond: 5,
    iron: 1,
    stone: 1,
  };
  const stone_pick_fatigue = {
    diamond: 25,
    iron: 5,
    stone: 1,
  };
  //광물 배열 자르기
  let mineralArr = [];
  while (minerals.length > 0) {
    //minerals에서 5개씩 잘라서 떼어냄 , 떼어진 배열을 mineralArr에 붙임
    mineralArr.push(minerals.splice(0, 5));
  }
  //곡괭이 개수 이상은 필요없음
  mineralArr = mineralArr.slice(0, dia_pick + iron_pick + stone_pick);

  //광물 배열 정렬하기 (다이아 많은 순, 철 많은 순, 돌 많은 순), 많을수록 앞에 (내림차순)
  //js의 정렬 방식 : 반환 값이 0보다 작으면 첫 번째 요소를 먼저 두고, 0보다 크면 두 번째 요소를 먼저 둡니다.
  mineralArr.sort((a, b) => {
    let aDia = a.filter((i) => i == "diamond").length;
    let bDia = b.filter((i) => i == "diamond").length;
    if (aDia !== bDia) return bDia - aDia;
    let aIron = a.filter((i) => i == "iron").length;
    let bIron = b.filter((i) => i == "iron").length;
    if (aIron !== bIron) return bIron - aIron;
    let aStone = a.filter((i) => i == "stone").length;
    let bStone = b.filter((i) => i == "stone").length;
    return bStone - aStone;
  });

  for (let i = 0; i < mineralArr.length; i++) {
    let mineral = mineralArr[i];
    //다섯개씩 들어있는 mineral을 곡괭이로 캐기 (우선순위: 다이아, 철, 돌)
    if (dia_pick > 0) {
      for (let j = 0; j < mineral.length; j++) {
        answer += dia_pick_fatigue[mineral[j]];
      }
      dia_pick -= 1;
    } else if (iron_pick > 0) {
      for (let j = 0; j < mineral.length; j++) {
        answer += iron_pick_fatigue[mineral[j]];
      }
      iron_pick -= 1;
    } else if (stone_pick > 0) {
      for (let j = 0; j < mineral.length; j++) {
        answer += stone_pick_fatigue[mineral[j]];
      }
      stone_pick -= 1;
    }
  }

  return answer;
}
console.log(
  solution([0, 0, 1], ["stone", "stone", "stone", "stone", "stone", "diamond"])
);
