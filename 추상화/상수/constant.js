// 상수 (constant)
const PI = 3.14; // 원주율, let으로 선언하지않고 const로 선언하면 상수로 취급된다. 또한 상수는 이름을 지을 때 대문자와 두개이상의 단어일 때는 밑줄로 이어주는 암묵적인 규칙이 있다.  
let radius = 0; // 반지름, 빈값을 표현하면서 들어갈 값의 자료형을 지정해 줄 때는 숫자형은(0), 문자열은('')을 할당해주면 된다. 

// 원의 넒이를 계산하는 함수
function calculateArea() {
  return PI * radius * radius;
}

// 반지름에 따른 원의 넒이를 출력하는 함수
function printArea() {
  return `반지름이 ${radius}일 때, 원의 넒이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());

/* 
상수 이름의 예 
PI, MY_NUMBER 
*/