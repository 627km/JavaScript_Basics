// Math 객체

// 절댓값 (Absolute Number)
console.log(Math.abs(-10));  // -10의 절댓값인 10이 출력된다. 
console.log(Math.abs(10));  // 10의 절댓값인 10이 출력된다. 

// 최댓값 (Maximum)
console.log(Math.max(2, -1, 4, 5, 0)); // (2, -1, 4, 5, 0) 중에 가장 큰 값이 출력된다. 

// 최솟값 (Minimum)
console.log(Math.min(2, -1, 4, 5, 0)); // (2, -1, 4, 5, 0) 중에 가장 작은 값이 출력된다. 

// 거듭제곱 (Exponentiation)
console.log(Math.pow(2, 3)); // 2의 3제곱 = 8이 출력된다. 
console.log(Math.pow(5, 2)); // 5의 제곱 = 25가 출력된다. 

// 제곱근 (Square Root)
console.log(Math.sqrt(25)); // 25의 제곱근 = 5가 출력된다.
console.log(Math.sqrt(49)); // 49의 제곱근 = 7이 출력된다. 

// 반올림 (Round)
console.log(Math.round(2.3)); // 2
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.49)); // 2
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.6)); // 3

//버림과 올림 (Floor and Ceil)
console.log(Math.floor(2.4)); // 2
console.log(Math.floor(2.49)); // 2
console.log(Math.floor(2.8)); // 2
console.log('-');
console.log(Math.ceil(2.4)); // 3
console.log(Math.ceil(2.49)); // 3
console.log(Math.ceil(2.8)); // 3
