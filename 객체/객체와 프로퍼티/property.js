// 객체 (object)
// 자바스크립트의 모든 것이 다 객체다!
// 객체는 중괄호로 만들 수 있다. 

let 전경민 = {
  // Property Name:  Property Value -> 한 쌍을 속성(Property)이라고 한다.
  brandName: '전경민',  
  bornYear: 1998,
  isVeryNice: true,
  worstcourse: null
}

// Property Name은 문자열이라서 원래 따옴표로 감싸줘야 하지만 자바스크립트가 자동으로 형 변환을 해주기 때문에 굳이 감싸주지 않아도 된다. 

// Property Name 주의사항
// : 첫 번째 글자는 반드시 문자, 밑줄(_), 달러 기호($) 중 하나로 시작
// : 띄어쓰기 금지
// : 하이픈(-) 금지
// 불가피하게 주의사항을 지키지 못할 떄는 반드시 따옴표로 감싸줘야 한다. 

// Property Value에는 모든 자료형이 들어갈 수 있다. 

// 객체 (object)
let codeit = {
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  'worst Course': null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'Javascript'
  }
};


// 객체에서 데이터 접근하기

// 점 표기법 (objectName.propertyName) -> propertyName가 따옴표로 감싸져있을 때 불가능 
console.log(codeit.bornYear);  // 2017이 출력된다. 

// 대괄호 표기법 (objectName['propertyName']) -> 점 표기법으로 표현 못 할때 사용
console.log(codeit['worst Course']); // null이 출력된다.

console.log(codeit.bestCourse.title);

// 객체의 Property를 수정하는 법
console.log(codeit.name);  // 코드잇 출력
codeit.name = 'codeit';  // 재할당 해줌
console.log(codeit.name);  // codeit 출력

// 객체의 Property를 추가하는 법
console.log(codeit.ceo); // 존재하지않는 property이기 때문에 undefined가 출력됨
codeit.ceo = '전경민';  // 할당을 해줌
console.log(codeit.ceo);  // 전경민 출력

// 객체의 Property를 삭제하는 법
console.log(codeit.isVeryNice);  // ture 출력
delete codeit.isVeryNice;  // property를 삭제함 
console.log(codeit.isVeryNice);  // 존재하지않는 property이기 때문에 undefined 출력


// 'propertyName' in object -> 객체안에 확인 할 이름을 가진 property가 있는지 확인해서 boolean형태로 알려줌 
console.log('name' in codeit);  // true