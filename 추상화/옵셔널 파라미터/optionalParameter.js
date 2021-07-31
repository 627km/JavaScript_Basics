// 옵셔널 파라미터 (Optional Parameters)
function sayHello(name) {
  console.log(`안녕하세요 ${name}님!`);
}

sayHello('전경민');  // 안녕하세요 전경민님!
sayHello('좋아요');  // 안녕하세요 좋아요님!
sayHello('사랑해');  // 안녕하세요 사랑해님!

// 파라미터가 있는데 함수를 호출할 때 어떠한 값도 전달하지 않는 경우 (undefined)
sayHello();  // 안녕하세요 undefined님!



// undefined가 출력되는 경우
let x;
console.log(x); // 변수 x에 어떠한 값도 할당해 주지 않은경우
console.log(sayHello('전경민최고')); // 함수를 호출했는데 함수에 return문이 작성되어 있지않은 경우


// 옵셔널 파라미터 (Optional Paramaters)
function introduce(name, age, nationality = '한국') { // 옵셔녈 파라미터는 선언할 때 생성하고 가장 뒤쪽으로 선언을 해줘야 한다. 
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드잇', 4, '미국'); // 값을 모두 전달한 경우
console.log('');
introduce('코드잇', 4); // 파라미터(국적) 값을 생략한 경우 = 미리 할당한 값이 출력이 된다. (미리 할당 한 값 = 한국)
