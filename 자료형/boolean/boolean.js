/*
AND연산 (&&)
-모두 참일때만 참
-하나라도 거짓이면 거짓
*/
console.log(true && true); // 두 값이 모두 true일때만 true.
console.log(true && false);
console.log(false && true);
console.log(false && false);

/*
OR연산 (||)
-하나라도 참이면 참
-둘다 거짓이어야 거짓
*/
console.log(true || true); 
console.log(true || false);
console.log(false || true);
console.log(false || false); // 두 값이 모두 false일때만 false.

/*
NOT연산 (!)
-반대로 뒤집어주는 역할
참이면 거짓으로 
거짓이면 참으로 
*/
console.log(!true); // flase
console.log(!false); // true
console.log(!!true); //true
console.log(!!false); // false



// 불린 (Blooean)
console.log(2 > 1);
console.log(2 < 1);
console.log(3 >= 2);
console.log(3 <= 3);
console.log(3 === 3); // 값이 서로 일치한다.
console.log(3 !== 3); // 값이 서로 불일치한다.

