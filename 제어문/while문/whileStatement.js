// while문 (while statement)
/*
while (조건부분) {
  동작부분
}
*/

// 같은 코드를 for문과 while문으로 작성하기.

for (let i = 1; i <= 10; i++) {
  console.log(`${i} Hello World!`);
}

// while문은 초기화부분이 없기 때문에 반복문 밖에서 글로벌 변수를 만들어 줘야한다. 또한 추가동작부분도 없기때문에 동작부분에 작성해줘야 한다. 
let i = 1;
while (i <= 10) {
  console.log(`${i} Hello World!`);
  i++;
}

// 보통 반복문안에서 사용한 변수를 반복문안에서만 사용할 때는 for문을 사용하고,
// 글로벌 변수를 반복문안에서 조건비교하고 다시 반복문 밖에서 사용할 때 while문을 사용한다. 