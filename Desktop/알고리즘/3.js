/* 각 자리수 반환 함수 만들기
아래의 조건에 맞는 함수를 구현해 보세요.

[조건]
함수명: getDigits
입력: 숫자 1개
출력(반환): 해당 숫자의 각 자릿수로 이루어진 배열

[예시 1]
입력: 1100
출력: [1, 1, 0, 0]

[예시 2]
입력: 14
출력: [1, 4]

[예시 3]
입력: 12321
출력: [1, 2, 3, 2, 1] */

function getDigits(x){
    let ans = [];
    str = String(x);
    ansone = str.split("")
    for(i = 0; i < ansone.length; i++){
        ans.push(parseInt(ansone[i]));

    }
    return ans;
    }