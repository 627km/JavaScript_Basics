// 배열 (Array) - 각 요소(element)들은 인덱스(index)라는 순서를 가지는 특징이 있다. -> 랭킹처럼 순서가 있는 값을 만들 때는 객체보다 배열이 효율적이다. 

// 객체로 만든 경우 
let courseRanking = {
  '1st': '자바스크립트 프로그래밍 기초',
  '2nd': 'Git으로 배우는 버전 관리',
  '3rd': '컴퓨터 개론',
  '4th': '파이썬 프로그래밍 기초'
};

// 배열로 만든 경우 -> 중괄호 대신 대괄호로 감싸준다.
let courseRanking2 = [
  '자바스크립트 프로그래밍 기초', // -> 요소 (element)라고 부른다.
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];
// 순서대로 번호가 매겨지고 그 번호를 index라고 한다. (index == property name)
// index를 사용해서 배열을 요소를 불러올 수 있다. console.log(배열이름index)

// indexing (0~...)
console.log(courseRanking2[0]);  // indexing은 0부터 시작하므로 첫 번째 줄에 있는 '자바스트립트 프로그래밍 기초'가 출력된다. 


// 배열 (Array)
let members = ['쿤갈레', 'Zerrard66', '우리생각', '흙토끼', 'End Miracle'];

console.log(typeof members); // members 라는 변수의 자료형이 무엇인지 확인 -> object라고 출력됨 (즉, 배열도 자바스크립트에서 미리 만들어둔 특별한 객체이다.)

console.log(members.length); // 배열이 가지고 있는 요소의 총 개수를 나타내 줌 

console.log(members['length']); // 대괄호 표기법으로도 나태낼 수 있다. 

console.log(members[4]); // End Miracle 출력
console.log(members[members.length - 1]); // End Miracle 출력

members[5] = 'Nice Miracle'; // 원래 존재하지 않은 5번 인덱스를 만들어서 'Nice Miracle'을 지정해준다.
console.log(members[5]); // 윗 줄에서 지정해주지 않은경우 undefined가 출력된다.