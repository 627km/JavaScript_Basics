// for..in
/* 형태
for (변수 in 객체) {
  동작부분
}
*/

let codeit = {  // codeit 이라는 객체 
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: '자바스크립트 프로그래밍 기초'
}

for (let key in codeit) {  // key라는 변수를 만든다. 
  console.log(key); // property name을 출력
  console.log(codeit[key]); // property value를 출력 
}

// 객체내부에 있는 모든 property 값들을 하나씩 다뤄야하는 경우에는 for..in문을 활용할 수 있다. 