console.log('Hello Codeit!')

console.log(10 + 5)
console.log(20 - 5)
// 다른줄에 입력 할 경우 에러가 발생하지 않지만 

console.log(10 + 5); console.log(20 - 5)
// 같은줄에 입력할 경우에는 에러가 발생해서 세미콜론으로 구분을 해줘야 한다.


/*
<자료형>
숫자(number) - 정수(integer), 소수(floating point)
문자(string)
불린(boolean) - 참(true), 거짓(false)
*/

/*
<추상화>
목적을 명확히
불필요한 것들은 숨기기
핵심만 드러내기
*/

//<변수 선언>
let espressoPrice; //변수선언
espressoPrice = 3000; //값 지정
let lattePrice;
lattePrice = 4300;
let mochaPrice;
mochaPrice = 4800;

// 변수 선언과 동시에 값 지정해주기 
// let espressoPrice = 3000;
// let lattePrice = 4300;
// let mochaPrice = 4800;

console.log(espressoPrice * 2);
console.log(lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice + mochaPrice);
console.log(espressoPrice + lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice * 3);

// 변수를 사용하면 제품의 가격이 변경되어도 코드를 수정하기 편리하다.

//<함수 선언>
function 함수이름() { 
  명령; 
  명령;
};

//여러나라 인사말을 출력하는 함수 선언
function Greetings() {
  console.log('Hi')
  console.log('안녕')
  console.log('Guten Tag')
  console.log('Bonjour')
  console.log('Buongiorno')
};

//<함수 호출>
Greetings();

//파라미터
//함수 선언
function 함수이름(파라미터) {
  console.log(파라미터);
}

/*
함수 호출
함수이름(값);
*/

//파라미터를 포함해서 여러나라 인사말을 출력하는 함수 선언
function greetings(sentence) {
  console.log('Hi');
  console.log('안녕');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
  console.log(sentence);
};

greetings('Hola');

//함수 선언
function welcome(name) {
  console.log('안녕하세요 ' + name + '님')
};

//함수 호출
welcome('전경민');

//여러개의 파라미터를 갖는 함수 선언 
function printSum(num1, num2) {
  console.log(num1 + num2);
};

//함수 호출
printSum(10, 5);
printSum(123, 4);
printSum(56, 7890);

//return (=반환값)
function getTwice(number) {
  return number * 2;
};

console.log(getTwice(5))
// = console.log(10)