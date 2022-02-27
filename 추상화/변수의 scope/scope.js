// Scope : 범위, 영역
function myFunction() {  // 블록문 (Block Statement) : 중괄호로 감싼 코드
  let x = 3;  // 로컬 변수, 지역 변수 (Local Variable) : 블록문 안에 선언 된 변수들 (블록문 안에서만 사용 가능)
  console.log(x);  
}

myFunction();  // 예상대로 3이 출력 됨
// console.log(x);  -  error가 발생함 (유효하지않은 곳에서 사용이 되어서)


console.log('');

let y = 3;  // 글로벌 변수, 전역 변수 (Global Variable) : (블록문 밖에서 선언했기 때문에 블록문 안, 밖에서 사용 가능)

function MyFunction() {
  console.log(y);
}

MyFunction();  // 예상대로 3이 출력 됨 
console.log(y);  // error가 발생하지 않는다. (변수y가 블록문 밖에서 선언되었기 때문)