//숨어있는 숫자의 덧셈(2)

/*문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
1 ≤ my_string 안의 자연수 ≤ 1000
연속된 수는 하나의 숫자로 간주합니다.
000123과 같이 0이 선행하는 경우는 없습니다.
문자열에 자연수가 없는 경우 0을 return 해주세요.

입출력 예
my_string	result
"aAb1B2cC34oOp"	37
"1a2b3c4d123Z"	133
*/

function solution(my_string) {
    var answer = my_string.replace(/[A-z]/g,"*").split("*")
    let result = 0;
    for(i = 0; i < answer.length; i++){
        if(answer[i] >= 1 && answer[i] <=1000) result += parseInt(answer[i])
    }
    
    return result;
}


//가까운 수
/*문제 설명
정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ array의 길이 ≤ 100
1 ≤ array의 원소 ≤ 100
1 ≤ n ≤ 100
가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
입출력 예
array	       n	result
[3, 10, 28] 	20	28
[10, 11, 12]	   13	12
입출력 예 설명
입출력 예 #1

3, 10, 28 중 20과 가장 가까운 수는 28입니다.
입출력 예 #2

10, 11, 12 중 13과 가장 가까운 수는 12입니다.*/

function solution(array, n) {
    var answer = array.sort((a,b) => Math.abs(a - n) - Math.abs(b - n))
   return Math.abs(answer[0] - n) === Math.abs(answer[1] - n) ?
       Math.min(answer[0],answer[1]) : answer[0]
       
}


//A 로 B 만들기
/*문제 설명
문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < before의 길이 == after의 길이 < 1,000
before와 after는 모두 소문자로 이루어져 있습니다.
입출력 예
before	after	result
"olleh"	"hello"	1
"allpe"	"apple"	0
입출력 예 설명
입출력 예 #1

"olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.
입출력 예 #2

"allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.*/
function solution(before, after) {
    let beforearr = before.split("").sort().join("")
    let afterarr = after.split("").sort().join("")
 
       
    return beforearr === afterarr ? 1 : 0
      
}


//모르는거
//한번만 등장한 문자
function solution(s) {
    let transString = s.split("")
    let countedword = {}
    let answer = []
    for(i = 0; i < transString.length; i++){
       if(countedword[transString[i]] == undefined){ 
             countedword[transString[i]] = 1; 
       }else{
           countedword[transString[i]] += 1; 
       }
       
}
    for(let key in countedword){
        for(let i of key){
        countedword[key[i]] === 1 //이러면 그냥 1이 아닌것들, 일단 찍힌거는 1로 되고 중복제거 형식으로 답 나옴 why?
            answer.push(i)
    }
    }
    return answer;
}