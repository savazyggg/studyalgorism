/* 배열 관련 함수 만들기 2
아래의 조건에 맞는 함수를 구현해 보세요.

[조건]
함수명: reverseStringArray
입력: 문자열들로 이루어진 배열 1개
출력(반환): 문자열들이 알파벳 순서 반대대로 나열된 배열

[예시 1]
입력: ["c", "b", "d"]
출력: ["d", "c", "b"]

[예시 2]
입력: ["kakao", "naver", "apple"]
출력: ["naver", "kakao", "apple"] */

function reverseStringArray(inputA){
    let order = inputA.sort();
    let reveseorder = [];
    for(i = order.length - 1; i >= 0; i--){
        reveseorder.push(order[i]);
    }
    return reveseorder;

}
