function sayHello() {
  console.log('Hello');
  console.log('Welcome to Codeit!');
}

console.log('함수 호출 전');
sayHello();
console.log('함수 호출 후');

// <출력>
// 함수 호출 전
// Hello
// Welcome to Codeit!
// 함수 호출 후  


function square(x) {
  return x * x;
}

console.log('함수 호출 전');
console.log(square(5));
console.log('함수 호출 후');

// <출력>
// 함수 호출 전
// 25
// 함수 호출 후



