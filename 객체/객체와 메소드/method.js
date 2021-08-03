// 메소드 (Method)

// Property Value로 함수를 사용하고있다. 
// greetings라는 객체에 세개의 메소드가 있는 형태이다. 
let greetings = {
  sayHello: function () {  // 함수의 이름은 propertyName이 대신해준다.
    console.log('Hello!');
  },
  sayHi: function () {
    console.log('Hi!');
  },
  sayBye: function () {
    console.log('Bye!');
  }
};

greetings.sayHello();  // Hello 출력

let rectAngle = {
  width: 30,
  height: 50,
  getArea: function () {
    return rectAngle.width * rectAngle.height;
  }
}

let triAngle = {
  width: 15,
  height: 40,
  getArea: function () {
    return triAngle.width * triAngle.height / 2;
  }
}

// method를 활용하면 다른함수와의 이름중복을 신경쓰지않아도 된다.