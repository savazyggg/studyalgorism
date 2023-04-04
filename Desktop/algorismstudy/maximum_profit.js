//최대 수익 계산하기
//동안의 주식가격 변화를 기준으로 낼 수 있는 가장 큰 수익 계산하기

/*주어진 기간동안 주식을 구입, 가장 비쌀때 주식을 판매
예) 3일동안의 주식가격이 [100,50,250]이라면, 최대이익은 200
예) 3일동안의 주식가격이 [100,50,20]이라면, 최대이익은 0*/

/*input 배열에 반복문 실행
1. 매회의 반복마다 조건물 걸기(현재까지 가장 저렴한 구입가격과 현재의 가격을 비교)
2. 두가지 결정
 가) 현재의 가격이 minBuyPrice보다 클때 (수익 발생 o) -> maxProfit 변수값 업데이트
 나) 현재의 가격이 minBuyPrice보다 작을때 (수익 발생 x) -> minBuyPrice 변수값 업데이트
 
 반복문 종료 후,  maxProfit 리턴 */

 
const test1 = [10,20,50,100,80,250] //240
const test2 = [150,80,60,50,30] //0 

function maxProfit(prices){
    maxProfit = 0
    minBuyPrice = prices[0]

    for(let price of prices){
        if(minBuyPrice < price){
            maxProfit = Math.max(maxProfit, price-minBuyPrice)//현재의 가격이 minBuyPrice보다 클때 (수익 발생 o) -> maxProfit 변수값 업데이트

        }else{
            minBuyPrice = price;//현재의 가격이 minBuyPrice보다 작을때 (수익 발생 x) -> minBuyPrice 변수값 업데이트
        }
    }
  return maxProfit;
}


console.log(maxProfit(test2))