// 실습과제 
/* 
현명하게 거스름돈을 계산해 주는 프로그램을 만들려고 한다. 에를 들어 33000원짜리 물건을 사기위해 1000000원을 냈다면 
50000원 1장, 10000원 1장, 5000원 1장, 1000원 2장 이런 식으로 가장 적은 수의 지폐를 거슬러 주는 것이다. 

calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000); 

위의 함수를 실행했을 때 

50000원 지폐: 1장 
10000원 지폐: 1장 
5000원 지폐: 1장 
1000원 지폐: 2장 

50000원 지폐: 2장 
10000원 지폐: 2장 
5000원 지폐: 0장
1000원 지폐: 2장

이 출력 되도록 프로그램을 작성해라.
*/

function calculateChange(payment, cost) {
  let change = payment - cost; // 거스름돈의 총액

  const fiftyCount = (change - (change % 50000)) / 50000; // 거스름돈의 총액에서 5만원권의 갯수를 구함
  change = change - (50000 * fiftyCount); // change의 값을 거스름돈 총액에서 5만원 권의 총액을 뺀 가격으로 재할당한다. 

  const tenCount = (change - (change % 10000)) / 10000; // 새로 재할당된 change값에서 만원권의 갯수를 구함
  change = change - (10000 * tenCount); // change의 값을 만원권의 금액만큼 뺀 금액으로 재할당한다.

  const fiveCount = (change - (change % 5000)) / 5000;
  change = change - (5000 * fiveCount);

  const oneCount = (change - (change % 1000)) / 1000;
  change = change - (1000 * oneCount);

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000)