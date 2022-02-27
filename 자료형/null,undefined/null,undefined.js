// null과 undefined
// null(의도적으로 값 없음을 지정/ 의도적인 없음!), undefined(선언만 하고 값을 지정해 주지않음/ 처음부터 없음!)
let 전경민;
console.log(전경민); // -> undefined (변수 선언만 하고 변수에 값을 지정해주지않아서 지정된 값이 없다.)

let 전경민2 = null;
console.log(전경민2); // -> null (의도적으로 값이 없음을 지정할 때)

console.log(null == undefined); // true
console.log(null === undefined); // false