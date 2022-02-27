// if문 (if statement)
/*
if (조건부분) {
  동작부분
}
*/

// EX)1
var date = new Date(); // 현재 날짜와 시간을 구함
var hour = date.getHours(); // 그 중 시각만 구함 

if (hour < 12) {  // hour < 12 가 참일 때 실행
  alert('오전입니다.');
}

if (hour >= 12) {  // hour >= 12 가 참일 때 실행 
  alert('오후입니다.');
}

// EX)2
let temperature = 105;

if (temperature <= 0) {
  console.log('물이 업니다.');  // 온도가 0도 이하라는 조건을 만족할 때 
} else {
  if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.'); // 온도가 0도 이하라는 조건을 만족하지않고 100도 이하라는 조건만 만족할 때
  } else{
  console.log('물이 끓습니다.');  // 아무 조건도 만족하지 않을 때
  }
}
// 중괄호가 너무 많아서 가독성이 좋지않다. 

// else if 를 사용해서 더 간결하게 작성하는 방법
if (temperature <= 0) {
  console.log('물이 업니다.');
} else if (temperature < 100) {
  console.log('물이 얼지도 끓지도 않습니다.');
} else {
  console.log('물이 끓습니다.');
}


// 여러가지 조건이 있는 코드를 작성할 때는 else if문을 사용하면 간결하고 가독성이 좋은 코드를 작성할 수 있다. 