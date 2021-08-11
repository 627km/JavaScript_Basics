// 숫자 표기법

// 지수 표기법 
let millionaire = 1000000000;
let myNumber = 1e9;  // 지수 표기법 (e의 오른쪽에 있는 수 만큼 10의 거듭제곱을 곱하는 방식)

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);  // true 출력

console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);

console.log(16e-5 === 0.00016);  // e의 오른쪽에 있는 수가 음수이면 10의 거듭제곱만큼 나눠주면 된다. 
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

// 16진법 (Hexadecimal)
let hex1 = 0xff;  // 16진법은 앞에 0과 hexa의 x를 붙이고 16진법을 사용하면 된다.
let hex2 = 0xFF;  

// 8진법 (Octal)
let octal = 0o377;  // 8진법은 앞에 0과 octal의 o를 붙이고 8진법을 사용하면 된다.

// 2진법 (binary numeral system)
let binary = 0b11111111;  // 2진법은 앞에 0과 binary의 b를 붙이고 2진법을 사용하면 된다. 

console.log(hex1); // 255
console.log(hex2); // 255
console.log(octal); // 255
console.log(binary); // 255

// Number (숫자형 메소드)
// toFixed(0 ~ 100)  ->  파라미터로 숫자를 전달하면 그 숫자만큼의 소수점 아래자리를 나타내준다. <계산된 값의 자료형은 문자열이다.!!!!>
let myNumber1 = 0.3591; 
let myNumber2 = 0.35912

console.log(myNumber1.toFixed(3)); // 소수점 아래 4번째자리에서 반올림해서 소수점아래 3번째자리까지 나타내준다. 
console.log(myNumber2.toFixed(7)); // 변수 myNumber2는 소수점아래 5번째 자리까지밖에 없으므로 숫자가 없는 자리는 0으로 대체한다. 
console.log(typeof myNumber2); // number
console.log(typeof myNumber2.toFixed(7)); // 계산된 값은 자료형이 문자열이다. (string)
console.log(typeof Number(myNumber2.toFixed(7)));  // Number로 형 변환을 해줌 
console.log(Number(myNumber2.toFixed(7))); // 숫자형으로 형 변환을 해서 숫자가 없는 빈자리가 0으로 채워진 상태로 나오지 않는다. 
console.log(+myNumber2.toFixed(7));  // Number대신 +를 붙여줘도 똑같은 기능을 한다. 

// toString(2 ~ 36)  ->  파라미터로 전달하는 숫자의 진법으로 숫자를 변형시킨다. <계산된 결과값의 자료형은 문자열이다.!!!!>
let myNumber3 = 255;

console.log(myNumber3.toString(2))  // 255를 2진법으로 바꾼다.
console.log(myNumber3.toString(8))  // 255를 8진법으로 바꾼다.
console.log(myNumber3.toString(16))  // 255를 16진법으로 바꾼다.
console.log(255..toString(2));  // 변수를 사용하지않고 숫자를 바로 사용해서 숫자형 메소드를 사용할 때는 점표기법을 점2개를 찍어서 사용해야한다.
console.log((255).toString(8));  //숫자 양옆에 괄호를 사용하는 방법도 있다. 