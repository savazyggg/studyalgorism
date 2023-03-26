//못푼 문제 : 한번만 등장한 문자, 진료순서 구하기, 팩토리얼, 합성수 찾기, 직삼각형 만들기

//이진수 더하기
function solution(bin1, bin2) {
    answer = parseInt(bin1, 2) + parseInt(bin2, 2)
    return answer.toString(2);
}

//숨어있는 숫자의 덧셈(2)
function solution(my_string) {
    var answer = my_string.replace(/[A-z]/g,"*").split("*")
    let result = 0;
    for(i = 0; i < answer.length; i++){
        if(answer[i] >= 1 && answer[i] <=1000) result += parseInt(answer[i])
    }
    
    return result;
}

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
        countedword[key[i]] === 1
            answer.push(i)
    }
    }
    return answer;
}

//진료순서 구하기
function solution(emergency) {
    answer = [];
    while(emergency.length != 0)
    answer.push(emergency.indexOf(Math.max(...emergency)))
    emergency.splice(indexOf(Math.max(...emergency),1))
    return answer;

}
ㅡㅡㅡㅡㅡㅡㅡ
var answer = emergency.slice()
answer.sort((a,b) => a-b)

let finalArray = [];
answer.forEach((el)=>{emergency.forEach((emergency,index) => {
            if(el === emergency){
              finalArray.push(index+1)
                          }
})})


return finalArray;


//가까운 수
function solution(array, n) {
    var answer = array.sort((a,b) => Math.abs(a - n) - Math.abs(b - n))
   return Math.abs(answer[0] - n) === Math.abs(answer[1] - n) ?
       Math.min(answer[0],answer[1]) : answer[0]
       
}

//k의 갯수
function solution(i, j, k) {
    var answer = [];
    let count = 0;
    for(index = i; index <= j; index++){
        answer.push(index)
    }
    let answer1 = answer.join("")
    for(index = 0; index < answer1.length; index++){
        if(answer1[index] == k) count++;   
}
    return count;
}

//2차원으로 만들기
function solution(num_list, n) {
    let result = [];
    
    for(let i = 0; i < num_list.length / n; i++){
        result = [...result, num_list.slice(i * n, i * n + n)];
    }
    
    return result;
}

//팩토리얼
function solution(n) {
    let answer = 1;
    let sum = 0;
        let result = [];
    for(i = 2 ; i <= 10; i++){
       sum = answer * i
    } if(sum >= n) {
       result.push(i)
    
    }
        return result;
    }

//a와 b로 만들기
function solution(before, after) {
        let beforearr = before.split("").sort().join("")
        let afterarr = after.split("").sort().join("")
     
           
        return beforearr === afterarr ? 1 : 0
          
    }

//모스부호(1)
function solution(letter) {
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    return letter.split(" ").map((a) => morse[a]).join("");
    
}

//중복된 문자 제거
function solution(my_string) {
    let arr = my_string.split("")
    let answer = [...new Set(arr)];
     
      
        return answer.join("");
    }


//합성수 찾기
function solution(n) {
    let answer = []
    for(i = 1; i <= n; i++)
        for(j = 2; j <= n; j++)
            if(i % j == 0)
            answer.push(j)
    let sese = new Set(answer)
    return Array.from(sese);
}

//문자열 정렬하기
function solution(my_string) {
    let answer = my_string.toLowerCase().split("")
    let answer1 = answer.sort()
 
    return answer1.join("")
  
}

//숫자 찾기
function solution(num, k) {
    var answer = num.toString()
    if (answer.includes(k)) {
        return answer.indexOf(k) + 1;
    } else {
        return -1;
    }
}


//약수구하기
function solution(n) {
    var answer = [];
    for(i=1; i<=n; i++) 
        n%i == 0? answer.push(i) : answer;
    return answer;
}

//369게임
function solution(order) {
    answer = 0;
    const arr = String(order)
    const mapfn = (arg) => Number(arg)
    const newArr = arr.split("").map(mapfn)
    
    
    for(i=0; i < newArr.length; i++)
        if(newArr[i] % 3 == 0 && newArr[i] != 0){ 
            answer ++
        }
    return answer;
}

//피자나눠먹기
function solution(n) {
    for(i = 1; i <= 100; i++)
           if((6 * i) % n == 0) break;
           return i;
        

}

//외계행성의 나이
function solution(age) {
    let arr = String(age).split("").map(Number)
    let answer = [];
    const planet = 
    {0 : "a",
    1 : "b",
    2 : "c",
    3 : "d",
    4 : "e",
    5 : "f",
    6 : "g",
    7 : "h",
    8 : "i",
    9 : "j",}
  
    for(i = 0; i < arr.length; i++)
         answer.push(planet[arr[i]])
    return answer.join("")
}

//가장큰수찾기
function solution(array) {
    let arr = array.slice()
    let result = []
    let answer = arr.sort((a,b) => b - a); 
    result.push(arr[0])
    
    
    for(i = 0; i < array.length; i++)
        if(array[i] === answer[0]) result.push(i)
    
    return result;
   
}

//배열 회전시키기
function solution(numbers, direction) {
    if(direction == "left")
    {
        numbers.push(numbers[0])
        numbers.shift()
    }
    
    else {
        numbers.unshift(numbers[numbers.length-1])
        numbers.pop()
    }
    return numbers;
}

//인덱스 바꾸기
function solution(my_string, num1, num2) {
    let arr = my_string.split("")
    arr.splice(num1,1,my_string[num2])
    arr.splice(num2,1,my_string[num1])

    return arr.join("");
}

//최댓값 만들기
function solution(numbers) {
    let arr = numbers.sort((a,b) => a-b)
    return arr[0] * arr[1] >= arr[numbers.length -1] * arr[numbers.length -2]?
    arr[0] * arr[1] : arr[numbers.length -1] * arr[numbers.length -2]

}

//n배수 고르기

function solution(n, numlist) {
    let arr = []
    for(i = 0; i <numlist.length; i++){
     if(numlist[i] % n ==0) arr.push(numlist[i])
 }   
    return arr;
    
}

//주사위 개수
function solution(box, n) {
    let width = Math.floor(box[0] / n)
    let length = Math.floor(box[1] / n)
    let height = Math.floor(box[2] / n)
    return width * length * height;
}

//세균증식
function solution(n, t) {
   
    return  n*2**t
}

//문자열 정렬하기(1)
function solution(my_string) {
    answer = [];
    for(i = 0; i < my_string.length; i++){
        if(my_string[i] >= 0 && my_string[i] <= 9) answer.push(parseInt(my_string[i]))
    }

    return answer.sort();
}

//대문자와 소문자
function solution(my_string) {
    answer = [];
    for(i = 0; i < my_string.length; i++){
        my_string[i] >= "a" && my_string[i] <= "z" ? 
            answer.push(my_string[i].toUpperCase()) : answer.push(my_string[i].toLowerCase())
    }
    return answer.join("");
}

//암호해독
function solution(cipher, code) {
    var answer = '';
    for(i=code-1; i < cipher.length; i += code)
        answer += cipher[i]
    return answer;
}

//가위바위보
function solution(rsp) {
    let arr = rsp.split("").map(Number)
    answer = [];
    for(i = 0; i < arr.length; i++)
       if(arr[i] == 2) answer.push("0") 
        else if(arr[i] == 5) answer.push("2")
            else if(arr[i] == 0) answer.push("5")
   return answer.join("");
}

//개미군단
function solution(hp) {
    const gen = Math.floor(hp / 5)
    const sol = Math.floor((hp % 5)/3)
    const wor = Math.floor(((hp % 5) % 3))
    var answer = gen + sol + wor;
    return answer;
}

//제곱수 판별하기
function solution(n) {
    return Math.sqrt(n) % 1 !==0 ? 2:1;
}


//문자열안에 문자열
function solution(str1, str2) {
    let pattern = new RegExp(str2, "g");
    var answer = str1.replace(pattern,"");
    return answer === str1? 2 : 1
}

//자릿수 더하기
function solution(n) {
    let sum = 0;
    let str = String(n).split("").map(Number)
    str.forEach((item) => {sum += item})

    return sum;
}

//모음제거
function solution(my_string) {
    var answer = my_string.replace(/a|e|i|o|u/g,"");
    return answer;
}

//숨어있는 숫자의 덧셈(1)
function solution(my_string) {
    var answer = [];
    for(i = 0; i < my_string.length; i++)
    if(my_string[i] >= 0 && my_string[i] <=9) answer.push(my_string[i])

    /*중복제거 원하면
    const set = new Set(answer);
    const uni = [...set];*/
    
    let result = 0;
    for(i = 0; i < answer.length; i++)
        result += parseInt(answer[i])
       
    return result
}

//편지
function solution(message) {
    return message.length * 2;
}

//배열 두배 만들기
function solution(numbers) {
    let answer = [];
    for(i=0; i < numbers.length; i++){
        answer.push(numbers[i] * 2)
    }
    
    return answer;
}

//짝수는 싫어요
function solution(n) {
    var answer = [];
    for(i = 1; i <= n; i++)
    {i % 2 !== 0 ? answer.push(i) : answer = answer}
    return answer;
}


//배열뒤집기
function solution(num_list) {
    var answer = [];
    for(i = num_list.length-1; i >= 0; i--) answer.push(num_list[i])
    return answer;
}

//아이스 아메리카노
function solution(money) {
    return [Math.floor(money/5500),money%5500];
}

//중앙값 구하기
function solution(array) {
    var answer = array.sort((a,b)=>a-b)
    return answer[Math.floor(answer.length/2)];
}

//중복된 숫자 개수
function solution(array, n) {
    let result = array.filter((num) => num === n)
    return result.length
    
}

//짝수 홀수 개수
function solution(num_list) {
    let even = 0;
    let odd = 0;
    for(i = 0; i < num_list.length; i++) 
        num_list[i] % 2 === 0 ? even++ : odd++
    return [even, odd];
}

//점의 위치 구하기
function solution(dot) {

    return dot[0] > 0 && dot[1] > 0 ?  1 :
           dot[0] < 0 && dot[1] > 0 ?  2 :
           dot[0] < 0 && dot[1] < 0 ?  3 :
           dot[0] > 0 && dot[1] < 0 ?  4 :  0

}

//머쓱이보다 키 큰 사람
function solution(array, height) {
    let result = array.filter((x) => x > height)
    return result.length;
}

//문자 반복 출력하기
function solution(my_string, n) {
    var answer = [];
    for(i=0; i < my_string.length; i++) answer.push(my_string[i].repeat(n))
    return answer.join("");
}

//옷가게 할인 받기
function solution(price) {
    let answer = 0;
    if(price < 100000) answer= price;
    if(price >= 100000 && price <300000) answer = Math.floor(price * 0.95)
    else if(price >= 300000 && price <500000) answer = Math.floor(price * 0.9)
    else if(price >= 500000) answer = Math.floor(price * 0.8)
   
    return answer;
}

//문자열 뒤집기
function solution(my_string) {
    let arr = my_string.split("")
    return arr.reverse().join("");
}

//특정 문자 제거
function solution(my_string, letter) {
    let answer = my_string.replaceAll(letter,"")
    return answer;
}

//최댓값 만들기
function solution(numbers) {
    let arr = numbers.sort((a,b) => b-a)
    return arr[0] * arr[1]
}

//배열자르기
function solution(numbers, num1, num2) {
    return numbers.splice(num1,num2-num1+1);
}

//피자나눠먹기(1)
function solution(n) {
    var answer = Math.ceil(n/7)
    return answer;
}

//피자나눠먹기(3)
function solution(slice, n) {
    var answer = Math.ceil(n/slice);
    return answer;
}

//삼각형 완성조건(1)
function solution(sides) {
    let arr = sides.sort((a,b) => a-b);
    return arr[2] < arr[1] + arr[0] ? 1 : 2;
}

//배열자르기
function solution(numbers, num1, num2) {
    return numbers.splice(num1,num2-num1+1);
}

//배열 원소의 길이
function solution(strlist) {
    let answer = [];
    for(i = 0; i < strlist.length; i++) answer.push(strlist[i].length)
    return answer;
}

//양꼬치
function solution(n, k) {
    (n >= 10) ? k = k - Math.floor(n/10) : k = k;
    
    let meatCost = n * 12000
    let drinkCost = k * 2000
 
    var answer = meatCost + drinkCost;
    
    return answer;
}

//배열의 평균값
function solution(numbers) {
    var answer = numbers.reduce((st,n) => {return st + n},0)
    return answer/numbers.length;
}

//짝수의 합
function solution(n) {
    var answer = 0;
      for(i = 0; i <= n; i++){
          if(i % 2 ===0) answer += i
      }
    
    return answer;
}

//두수의 나눗셈
function solution(num1, num2) {
    var answer = Math.floor(num1/num2 * 1000)
    return answer;
}

//각도기
function solution(angle) {
    if(angle < 90){
        return 1;
    }if(angle === 90){
        return 2
    }if(angle < 180){
        return 3
    }if(angle === 180){
        return 4
    }
}

//나이 출력
function solution(age) {
    var answer = 0;
    answer = 2022 - age + 1;
    return answer;
}

//두 수의 합
function solution(num1, num2) {
    return num1 + num2;
}

//두 수의 차
function solution(num1, num2) {
    var answer = num1 - num2;
    return answer;
}

//숫자 비교하기
function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1 
    return answer;
}

//몫구하기
function solution(num1, num2) {
    let answer = 0;
    answer = Math.floor(num1/num2);
    return answer;
}