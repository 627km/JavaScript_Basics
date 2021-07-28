// 할당 연산자 (Assignment operators)
let name = '전경민';
let x = 5;

x = x - 2;
// 오른쪽의 피연산자를 왼쪽에 있는 피연산자에 할당한다. 
console.log(x); // 3이 출력된다. 


// 복합 할당 연산자 (Compound assignment operators)
let y = 2;

// 다음 두 줄은 같다. 
y =  y + 2;
y += 2;

// 다음 두 줄은 같다. 
y =  y * 2;
y *= 2;

// 다음 두 줄은 같다. 
y = y - 2;
y -= 2;

// 다음 두 줄은 같다. 
y = y / 2;
y /= 2;

// 다음 두 줄은 같다. 
y = y % 2;
y %= 2;

// 증가(increment) 감소(decrement) 연산자

// 다음 세 줄은 같다.
z = z + 1; 
z += 1;
z++;

// 다음 세 줄은 같다. 
z = z - 1;
z -= 1;
z--;