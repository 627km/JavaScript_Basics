// 배열의 메소드 (Array's Method)
let members = ['쿤갈레', 'Zerrard66', '우리생각', '흙토끼', 'End Miracle'];

console.log(members);

// splice(startIndex, deleteCount, item) -> 요소 삭제, 3번째 파라미터는 값을 전달하게 되면 삭제한 요소자리에 값을 추가하게 된다. 
members.splice(4);
console.log(members);  // 4번 인텍스: End Miracle 이 삭제된 상태로 출력이 된다. 

members.splice(1); // 1번 인덱스부터 그 뒤로 전부 다 삭제를 시킨다. 
console.log(members);

let family = ['봉미선', '신형만', '신짱구', '신짱아', '흰둥이'];

family.splice(1, 2); // 1번 인덱스부터 2개를 삭제시킨다. 
console.log(family); // 즉, '신형만 신짱구'가 삭제되어서 '봉미선 신짱아 흰둥이'만 출력이 된다.

family.splice(1, 1, '철수', '맹구');  // 1번 인덱스인 '신짱아'부터 1개 (즉 '신짱아'만)를 삭제하고 그 자리에 '철수'와 '맹구'를 추가시킨다. 
console.log(family); // 봉미선 철수 맹구 흰둥이 를 출력한다. 

// splice 메소드 사용 
// 배열의 첫 요소를 삭제
family.splice(0, 1);
// 배열의 마지막 요소를 삭제
family.splice(family.length - 1, 1);
// 배열의 첫 요소로 값 추가
family.splice(0, 0, '원장선생님');
// 배열의 마지막 요소로 값 추가
family.splice(family.length, 0, '액션가면');

// 다른 메소드 사용
let country = ['한국', '중국','일본', '미국', '영국', '러시아', '호주']; 
// 배열의 첫 요소를 삭제: shift()
country.shift();  // 배열의 첫 요소를 삭제하고 나머지는 앞으로 밀린다. 
console.log(country);  // [중국 일본 미국 영국 러시아 호주] 출력

// 배열의 마지막 요를 삭제: pop()
country.pop();
console.log(country);  // [중국 일본 미국 영국 러시아] 출력

//배열의 첫 요소로 값 추가: unshift()
country.unshift('프랑스');
console.log(country);  // [프랑스 중국 일본 미국 영국 러시아] 출력

// 배열의 마지막 요소로 값 추가: push()
country.push('체코');
console.log(country);  // [프랑스 중국 일본 미국 영국 러시아 체코] 출력

