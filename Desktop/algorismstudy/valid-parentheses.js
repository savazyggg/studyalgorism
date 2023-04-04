//스택에서 가장 대표적인 문제

/* 괄호가 올바르게 paired되었다는것 -> "{", "(", "["가 짝지어서 닫혀야한다.
예) "()()" , "(())()" -> 올바른 괄호
예) "[{)]" , "{}{" -> 올바르지 않은 괄호
*/

/*스택을 만들어주고
아이템 하나하나 프로세싱
if "{" of "[" or "(" 
-> push stack
else
->pop(); 매치되면 아무것도 안해주고
if maching not found : 매치안해주면 return false
-> return false

-> return length of stack
*/

function validParentheses(input){
    const stack = []
    for(const char of input){
        if(char === "{" || char === "(" || char === "["){
            stack.push(char)
            
        }else{
            const lastChar = stack.pop() //스택에 쌓여진 여는괄호들 중 마지막 배열에 있는 값을 pop으로 빼주어 lastChar로 넣어줌
            if(char === "}" && lastChar !== "{" ||
            char === "]"  && lastChar !== "[" ||
            char === ")"  && lastChar !== "(" ){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(validParentheses("}}}{{{"))
console.log(validParentheses("{}{}{}"))