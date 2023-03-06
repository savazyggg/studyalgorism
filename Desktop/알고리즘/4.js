/* 어린이만 골라내는 함수 만들기
아래의 조건에 맞는 함수를 구현해 보세요.

[조건]
함수명: getOnlyChilds
입력: 아래와 같은 형태의 객체들로 이루어진 배열

{
  name: 문자열(이름),
  age: 숫자(나이)
}
출력(반환):

20살 미만의 어린이의 이름으로 이루어진 배열 
*/

function getOnlyChilds(x){
    ans = [];
    for(i = 0; i < x.length; i++){
        if(x[i].age < 20){
            ans.push(x[i].name);
        }
    }
    return ans;
}
