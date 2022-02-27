// break와 continue
let x = 1;

while (x <= 10) {
  console.log(x);
  x++
  break;  // break 때문에 x를 출력하고 -> x를 1증가 시키고 -> break문을 만나 while문을 빠져나온다.
} 


for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // i가 2로 나누어 떨어지는 짝수일 때는 continue가 동작되므로 console.log를 건너뛰고 추가동작부분인 i++가 동작된다. 따라서 짝수는 출력되지않는다.
  }
  console.log(i);
}
// 1 3 5 7 9가 출력된다.


let i = 1;

while(i <= 10) {
  if (i % 2 === 0) {
    i++
    continue;  // i가 2로 나누어 떨어지는 짝수일 때는 continue가 동작되므로 다시 while문으로 돌아가서 동작부분을 반복한다. 
  }
  console.log(i);
  i++;
}
// 1 3 5 7 9가 출력된다. 