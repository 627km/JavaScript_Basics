// 기본형 (Primitive Type)
// Number, String, Boolean, Null, Undefined

// 참조형 (Reference Type)
// Object

let x = 3;
let y = x; 

console.log(x);  // 3
console.log(y);  // 3
y = 5;  // y의 값만 바뀌고 x의 값은 바뀌지 않는다.
console.log(x);  // 3
console.log(y);  // 5  

let a = {name: 'Kyungmin'};
let b = a;

console.log(a);
console.log(b);
b.birth = 2017;  // b에만 새로운 프로퍼티를 추가해줬지만, a에도 추가되었다. 
console.log(a);
console.log(b);
// 변수에 값이 지정되는 것이 아니라 변수에 주소값이 지정되기 때문에 b에만 추가를 해도 a에도 추가가 된다. 

// 참조형 복사하기 (Reference Type Copy)
let numbers1 = [1, 2, 3];
let numbers2 = numbers1.slice(); // numbers1의 주소값을 받아오는것이 아니라 slice메소드를 이용해서 값을 받아옴 

numbers2.push(4); // 배열의 마지막 요소로 4를 추가 

console.log(numbers1); // numbers2에만 추가가 되고 numbers1에는 추가가 되지 않는다. 
console.log(numbers2);

let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};

let course2 = course1;

course2.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);