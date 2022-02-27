// switch문 (switch statement)
/*
switch (비교할 값) {
  case 조건값_1:
    동작부분;
    break;  // witch문을 빠져나오는 코드
  case 조건값_2:
    동작부분;
    break;
  default:  // 비교할 값이 모든 모든 조건값과 일치하지 않을 때 동작할 코드 
    동작부분;
}
*/

let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

console.log('');

// break가 없는 경우 - 맞는 조건을 찾고 그 이후로도 쭉 출력한다. 
switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    
  case 2:
    console.log('고양이를 선택한 당신, ...');
    
  case 3:
    console.log('코알라를 선택한 당신, ...');
    
  case 4:
    console.log('강아지를 선택한 당신, ...');

  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}