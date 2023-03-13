// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
function solution(num) {
    let result1 = 0;
    let result2 = 0;
    for(i = 1; i <= num; i++){
        result1 += i**2;
        result2 += i;
    }
    result2 = result2**2

  return result2 - result1;
}


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
