// switch문 (switch statement)
/*
switch (비교할 값) {
  case 조건값_1:
    동작부분;
    break;  // witch문을 빠져나오는 코드
  case 조건값_2:
    동작부분;
    break;
  default:  // 비교할 값이 모든 모든 조건값과 일치하지 않을 때 동작할 코드 (default 키워드 부분은 생략가능)
    동작부분;
}
*/

let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

console.log('');

// break가 없는 경우 - 맞는 조건을 찾고 그 이후로도 쭉 출력한다. 
switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    
  case 2:
    console.log('고양이를 선택한 당신, ...');
    
  case 3:
    console.log('코알라를 선택한 당신, ...');
    
  case 4:
    console.log('강아지를 선택한 당신, ...');

  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

// switch 조건문으로 홀수와 짝수를 구분
var input = Number(prompt('숫자를 입력하세요.', '숫자'));  // 변수를 선언

switch (input % 2) {
  case 0:
    alert('짝수입니다.');
    break;
  case 1:
    alert('홀수입니다.');
    break;
  default:
    alert('숫자가 아닙니다.');
    break;
}

// 삼항 연산자 (삼항 연산자는 코드를 짧게 쓰려는 개발자가 자주 사용)
/* 
<불 표현식> ? <참일 때 실행하는 문장> : <거짓일 때 실행하는 문장>
*/

// 변수선언
var input = prompt('숫자를 입력하세요', '');
var number = Number(input);

// 조건문
(number > 0) ? alert('자연수입니다.') : alert('자연수가 아닙니다.');