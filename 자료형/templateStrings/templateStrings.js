// 템플릿 문자열 (template strings)
// template: 일정한 틀, 형식
let year = 2018;
let month = 3;
let day = 11;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.');

// 템플릿 문자열을 사용 - 백틱으로 출력되는 문장을 감싸고 변수자리에 ${변수}를 써준다.
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`); 

console.log('');

let mynumber = 3;

function getTwice(x) {
  return x * 2;
}

console.log(`${mynumber}의 두 배는 ${getTwice(mynumber)}입니다.`);