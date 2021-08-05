// 내장 객체 (Standard built-in objects)
// Date
let myDate = new Date();

console.log(myDate); // 요일 월 일 년도 시간 시간대

// new Date(milliseconds)  
let myDate3 = new Date(1000);  // 1970년 1월 1일 00:00:00 UTC + 1000밀리초 (밀리초: 1초를 1000으로 나눈 초)
// 특정한 값을 넣어주면 1970년 1월 1일 00:00:00 UTC 기준으로 + (특정값)초 가 출력된다.

// new Date('YYYY-MM-DD')
let myDate1 = new Date('2017-05-18');

// new Date('YYYY-MM-DDThh:mm:ss') -> 시간까지 나타내고 싶을 때
let myDate2 = new Date('2017-05-18T19:11:16');

console.log(myDate1);
console.log(myDate2);

// new Date(값, 값, 값, 값, 값, ...)
let myDate4 = new Date(2017, 4, 18, 19, 11, 16); // month는 0부터 시작하기 때문에 4는 5월을 출력한다. 
console.log(myDate4);

// Date.getTime()
let myDate5 = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate5.getTime());  // myDate객체가 1970년 1월 1일 00:00:00 UTC부터 몇 밀리초 지났는지..? -> 타임스탬프(time stamp

console.log(myDate5.getFullYear()); // 2017
console.log(myDate5.getMonth()); // 4 (5월을 의미)
console.log(myDate5.getDate()); // 18
console.log(myDate5.getDay()); // 4 (요일은 일~월을 0~6으로 표현) -> 즉 목요일을 의미
console.log(myDate5.getHours()); // 19
console.log(myDate5.getMinutes()); // 11
console.log(myDate5.getSeconds()); // 16
console.log(myDate5.getMilliseconds()); // 0