// 배열의 메소드 (Array's Method)
let members = ['쿤갈레', 'Zerrard66', '우리생각', '흙토끼', 'End Miracle'];

console.log(members);

// splice (요소 삭제)
members.splice(4);
console.log(members);  // 4번 인텍스: End Miracle 이 삭제된 상태로 출력이 된다. 

members.splice(1); // 1번 인덱스부터 그 뒤로 전부 다 삭제를 시킨다. 
console.log(members);

let family = ['봉미선', '신형만', '신짱구', '신짱아', '흰둥이'];

family.splice(1, 2); // 1번 인덱스부터 2개를 삭제시킨다. 
console.log(family); // 즉, '신형만 신짱구'가 삭제되어서 '봉미선 신짱아 흰둥이'만 출력이 된다. 