// 상수 (const)
let x = 1; 
console.log(x);
x = 2;
console.log(x);
// let 으로 선언한 변수는 재할당이 가능하다.

const y = 3;
console.log(y);
// y = 4; 
console.log(y);
// const 로 선언하면 재할당이 불가능 하므로 재할당을 하면 에러가 발생한다. 

// 검색창에 검색할 단어를 입력할 때는 그 단어가 변수이지만 그 단어가 검색기능이 동작하는 시점에서는 상수로 쓰인다. 

// 변수와 상수의 차이 
// 변수: myName -> 두번째부터 오는 단어의 첫 글자만 대문자로 써서 단어를 구분한다. 
// 상수: MY_NAME -> 모든 글자를 대문자로 표기하고 단어와 단어의 구분은 밑줄(_)을 사용해서 구분한다. 

const z = {name: 'kyungmin'};
z.birth = 1998;

console.log(z);
// z를 const로 선언했지만 주소값을 변경하는 것이 아니기때문에 변수의 값이 변할 수 있다. 