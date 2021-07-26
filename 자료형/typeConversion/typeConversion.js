// 형 변환 (Type Conversion)

// String, Number, Boolean

console.log(Number('10') + Number('5'));
// 문자형 10과 5를 숫자형으로 바꿔준다. 


console.log(String(10) + String(5));
// 숫자형 10과 5를 문자형으로 바꿔준다.

console.log(''); // 가독성을 위해 빈 줄 추가

// 숫자 -> 문자
let x = 123;
console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));

console.log('');

// 불린 -> 문자
let y = true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));

console.log('');

// 문자 -> 숫자
let a = '문자';
console.log(a);
console.log(Number(a)); // '문자'는 숫자형으로 형변환해도 숫자가 아니므로 NaN으로 표현된다.
console.log(typeof a);
console.log(typeof Number(a));

console.log('');

// 불린 -> 숫자
let b = true;
console.log(b);
console.log(Number(b)); // true를 숫자형으로 형변환하면 1로 변한다. (false는 0)
console.log(typeof b);
console.log(typeof Number(b));

console.log('');

// 문자 -> 불린
let c = '문자';
console.log(c);
console.log(Boolean(c)); // 일반적으로 어떤 값을 불린형으로 변환할 때는 true로 변환된다. 따라서 false로 변환되는 경우를 알아두면 유용하다.
console.log(typeof c);
console.log(typeof Boolean(c));

console.log('');

// 숫자 -> 불린
let d = 123;
console.log(d);
console.log(Boolean(d)); // 일반적으로 어떤 값을 불린형으로 변환할 때는 true로 변환된다. 따라서 false로 변환되는 경우를 알아두면 유용하다.
console.log(typeof d);
console.log(typeof Boolean(d));

// 불린형으로 변환했을 때 false로 변환되는 경우 
// 빈문자(''), 숫자 0, NaN  <- falsy 값 