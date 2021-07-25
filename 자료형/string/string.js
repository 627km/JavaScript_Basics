// 문자열
console.log(7);
console.log(3.14);
console.log('전경민');
console.log("전경민");
// 문자열을 열고 닫는 따옴표의 종류가 같아야 함.

console.log("I'm iron man");

// 큰 따옴표로 문자열을 감싸는데 문자열 안에 큰 따옴표가 있을때, 문자열 안에 있는 큰 따옴표 앞에 \를 붙여준다.
console.log("He said \"I'm iron man\"");
// 그러나 백 슬래시(\)가 들어가 있어서 가독성이 좋지 않음.

// 문자열을 감쌀 때 백틱 사용
console.log(`He said "I'm iron man"`);

// 문자열 연결
console.log('Hello' + '전경민');

// 숫자형이 아닌 문자열 3과 문자열 5를 더해주면 35가 된다.
console.log('3' + '5');