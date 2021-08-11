// String
let myString = 'Hi Kyungmin';

// 문자열 길이 
console.log(myString.length); // length 프로퍼티 (공백을 포함해서 글자수를 알려줌)

// 요소 접근
console.log(myString[3]); // 대괄호 표기법 -> 3번 인덱스에 있는 K를 가져온다.
console.log(myString.charAt(3)); // charAt 메소드 -> 3번 인덱스에 있는 K를 가져온다.

// 요소 탐색
console.log(myString.indexOf('i')); // 앞 부터 
console.log(myString.lastIndexOf('i')); // 뒤 부터
console.log(myString.indexOf('j')); // 포함되어 있지 않은 알파벳을 찾으면 -1이 출력된다. 

// 대소문자 변환 
console.log(myString.toUpperCase()); // 대문자로 변환 
console.log(myString.toLowerCase()); // 소문자로 변환 

// 양 끝 공백 제거
let myString2 = '  Hi Kyungmin  ';
console.log(myString2); // 공백과 함께 '  Hi Kyungmin  '이 출력된다.
console.log(myString2.trim()); // 양 끝 공백을 제거 해서 'Hi Kyungmin'이 출력된다. 

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 2)); // 0번 인덱스부터 2번 인덱스 직전까지(1번 인덱스까지) 불러온다.
console.log(myString.slice(3)); // 3번 인덱스부터 끝까지 불런온다.
console.log(myString.slice()); // 문자열 전체를 불러온다.
