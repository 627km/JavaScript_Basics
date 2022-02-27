// 형 변환 (type conversion)
// javascript에서는 유연하게 자동으로 형 변환이 된다. 장점이 될 수도 있고, 단점이 될 수도 있다. 
console.log('4' - true); // 3이 출력된다. 

console.log('');

// 산술 연산(+, -, *, /, %, **) -> 기본적으로 숫자형으로 변환
console.log(4 + '2'); // (+) 기호는 숫자를 더하는 기능보다 문자열을 연결해주는 기능이 더 강하다. 
console.log(4 + 2);
console.log(4 - true); // true를 자동으로 숫자형 1로 변환 시켜서 계산 
console.log(4 * false); // false를 자동으로 숫자형 0으로 변환 시켜서 계산
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two');

console.log('');

// 관계 비교 연산(<, <=, >, >=)
console.log(2 < '3'); // '3'이 숫자형 3으로 형 변환
console.log(2 > true); // true가 숫자형 1로 형 변환
console.log('2' <= false); // '2'가 숫자형 2로, false가 숫자형 0으로 형 변환
console.log('two' >= 1); // 'two'가 NaN으로 출력 (즉, 비교가 불가능)

console.log('');

//같음 비교 연산(===, !==, ==, !=)
console.log(1 === '1'); // 일치, 불일치(!==)
console.log(1 === true);
console.log(1 == '1'); // 동등, 부등(!=)
console.log(1 == true);
// 동등은 형 변환이 일어나고, 일치는 형 변환이 일어나지 않는다. 따라서 두 값이 같은지를 확인할 때는 등호 세 개를 사용하는 것이 안전하다. 