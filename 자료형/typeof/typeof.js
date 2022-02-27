// typeof 연산자
// 내가 사용하고 있는 값이 어떤 자료형인지 확인 할 수있다.

console.log(typeof 101);
console.log(typeof '전경민');
console.log(typeof true);

// javascript는 정수와 소수를 구분하지 않으므로 둘다 number로 출력된다. 
console.log(typeof 1); 
console.log(typeof 1.0);

let myName = '전경민';
function sayHello() {
  console.log('Hello');
}

console.log(typeof myName);
console.log(typeof sayHello);

// typeof연산자는 사칙연산보다 우선순위가 높다.
console.log(typeof 'Hello' + '전경민');
// (typeof 'Hello' : string) + '전경민' -> string전경민
console.log(typeof 8 - 3); // NaN : not a number
// (typeof 8 : number) - 3 : NaN


// 아래처럼 괄호를 사용하면 원하는 결과가 제대로 나온다.
console.log(typeof ('Hello' + '전경민')); // string
console.log(typeof (8 - 3)); // number

