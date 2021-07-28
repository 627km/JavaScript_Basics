// return문의 역할 1. 결과값 돌려주기
function square(x) {
  return x * x;
}

console.log(square(3)); // -> console.log(9)와 같다.


// return문의 역할 2. 실행 중단하기
function square(y) {
  console.log('return 전');
  return y * y;
  console.log('return 후');  // Dead Code (출력이 안되는 죽은 코드)
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');

/*
 함수 실행 순서
 함수 선언
 함수 호출 전 출력
 square 함수를 출력해서 return 전 출력, 9 출력, 함수 실행 중단. (즉, return문 아래에 있는 코드는 출력이 안됨)
 함수 호출 후 출력
 */
