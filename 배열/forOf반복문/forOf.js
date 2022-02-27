// for...of
/*
for (변수 of 배열) {
  동작부분
}
*/

let influencer = ['suwonlog', 'small.tiger', 'minam.ludens', 'cu_convenience24']

// for문 사용
for (let i = 0; i < influencer.length; i++) {
  console.log(influencer[i]);
}

// for...of문 사용
for (let element of influencer) {  // 코드가 훨씬 간결하다.
  console.log(element);
}

// for...in문 사용 -> for...in문은 주로 객체에 사용하므로 배열에는 사용하는것을 권장하지 않는다. 
for (let index in influencer) {
  console.log(influencer[index]);
}