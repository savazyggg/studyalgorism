//35문제
//35 factory 함수 구하기 - 함수구조가 이해가 안감
function one(n) {
    function two(value) {    
      return value**n;
    }
    return two;
  }


//34 sort구현하기
function height(x){
    let heights = x.split(" ").sort((a,b) => a - b).join(" ");
    if(x === heights) return "YES"
    else return "NO"
}

console.log(height("176 156 155 165 166 169"))//NO
console.log(height("155 156 165 166 169 176"))//YES


//33 거꾸로 출력
function reverse(input){
    result = " ";
    for(i = input.length-1; i >= 0; i--) result += input[i];
    return result;
}

console.log(reverse("1 2 3 4 5")) //5 4 3 2 1


//32 
function time(input){
    let arr = input.split(" ")
    return arr.length;
}

console.log(time("안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.")) //5

//31 자바스크립트 자료형의 복잡도 3,5

//30 
function findWord(inputSentence, inputWord){
    if(inputSentence.includes(inputWord)){
        return `${inputWord.length}` 
    }  else return false
    }

    console.log(findWord("pinapple is yummy","apple"))


//29
function isUpperChar(input){
    if(input[0] >= "A" && input[0] <= "Z"){return "YES"}
    else return "NO"
}
let a = "A"
console.log(isUpperChar(a))


//28
function twoGram(input){
    let result = [];
    for(i = 0; i < input.length-1; i++){
        result.push(`${input[i]} ${input[i+1]}`)
    }
    return result.join('\n')
}

console.log(twoGram('Javascript'))


//27 ????객체문제 - 모르겠음
const keys = prompt('영희 철수').split(' ');
const values = prompt('100 200').split(' ');
const obj = {};

function objectMaker(key, value){
    for(value in key){
        return result[key] == value;
    }
}

//26 행성문제 - 더 생각해보기
const korean = '수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성'
const english = 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune'

koreanarr = korean.split(', ');
englisharr = english.split(', ');

for(i=0; i < koreanarr.length; i++){
koreanarr[i] = englisharr[i]
}

//25 - 원의 넓이 구하기
function wide(n){
    let result = n * n * 3.14
    return result;
}

console.log(wide(3))


//24 - 대문자로 바꾸기
function toUpper(n){
    let result = n.toUpperCase()
    return result;
}

console.log(toUpper('mary'))

//23 - x

//22 - 2

//21 - 3,5 set 만들기 -> 공부필요

//20
function devide(n){
    let arr = n.split(" ")
    return `${parseInt(arr[0]/arr[1])} ${parseInt(arr[0]%arr[1])}`
    
}

console.log(devide('10 2'))

/* 파라미터 2개로 따로 받을때
function devide (num, num2){
    return `${Math.floor(num/num2)} ${num % num2}`
}
console.log(devide(10,2))*/


//19 제곱을 구하자
function findSq(n){
    let arr = n.split(" ")
    return `${parseInt(arr[0]**arr[1])}`
}

console.log(findSq('5 2'))


//18 평균 점수 - 틀림 다시
function ava(n){
    let arr = n.split(" ")
    return  `${parseInt(arr[0]+arr[1]+arr[2]/arr.length)}`
}

console.log(ava(20 30 40))


//17 150cm이상만
function limitHeight(cm){
    return (cm >= 150)? "YES" : "NO"
}
console.log(limitHeight(160))


//16 문자거꾸로
function reverseStr(word){
    result = "";
    for(i = word.length-1; i >= 0; i--){
        result += word[i]
    }
    return result;
}

console.log(reverseStr("거꾸로"))


//15 자기소개
function makeSentence(name){
    return `안녕하세요. 저는 ${name}입니다.`
}

console.log(makeSentence('김다정'))


//14 3의 배수인가요?
function three(n){
    return (n % 3 === 0)? "짝" : n
}

console.log(three(3))
console.log(three(2))


//13 몇번째 행성? - 틀림
const planets = '수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성'
function distanceOrder(planet){
    const planetsArr = planets.split(",")
    for(i = 0; i < planetsArr.length; i++){
        return (planetsArr.includes(planet))? planetsArr[i] : undefined;
    }

}

console.log(distanceOrder('지구'))


//12 게임 캐릭터 클라스 만들기 - 객체 문제..

//11 for를 기본 활용
let s = 0;
for(i = 0; i <= 100; i++){
    s += i;
}
console.log(s)


//10 - 별찍기
for(i)

//9 - concat을 활용한 출력 방법

//8 - 객체 키 이름 중복

//7 - 변수명 3, 5
//6 - 2
//5 - 4 
//4 - 2
//3 - 4
//2 - 다시 풀기
//1
var nums = [100, 200, 300, 400, 500];
 nums.splice(3,2)
 console.log(nums)
