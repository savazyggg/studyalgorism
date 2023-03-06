/*문자열 관련 함수 만들기 2
아래의 조건에 맞는 함수를 구현해 보세요.

[조건]
함수명: repeatString
입력: 문자열 1개, 숫자 1개
출력(반환): 각 문자열이 숫자만큼 반복되어 만들어진 새로운 문자열

[예시 1]
입력: "abc", 2
출력: "abcabc"

[예시 2]
입력: "hello", 3
출력: "hellohellohello"
*/

function repeatString(inputA,inputB) {
    newStr = "";
for(i = 0; i <= inputB; i++){
    newStr = inputA.repeat(i);

}

return newStr;
}