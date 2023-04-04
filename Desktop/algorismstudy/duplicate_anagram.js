//중복값 제거

const nums = [1,2,3,6,6,7,2,2,8,9]

//set을 이용하여
const mySet =[...new Set(nums)]
console.log(mySet)

//indexOf를 이용하여
//console.log(nums.indexOf(6)) -> 3

const unique = nums.filter((item, position) => nums.indexOf(item) === position)
//indexOf는 가장 처음으로 나타는 index를 가져옴으로 검사하고 있는 원소의 index와 비교하여 같을 경우에만 true를 리턴
console.log(unique)

//caching/frequency map을 이용하여
function uniqueNums(arr){
    const uniqueElements = {};
    const result = [];
    for(let element of arr){//arr의 value값을 도는데, 배열임으로 key는 index, value는 1,2,.. 예) {0 : 1, 1 : 2 ..}  
        console.log(result,uniqueElements)
        if(!uniqueElements[element]){//element를 value로가진게 안겹치면 (키값을 돌며 value값들끼리 비교)
            result.push(element)//result배열에 element(value값)을 넣어주고[1,2,3..]
        }
        uniqueElements[element] = element //객체에 삽입을 해주는 역할 예) uniqueNums[0] -> 1 : 1(배열 인덱스와 값 일치시킴)
    }
    
    return result;
}

console.log(uniqueNums(nums))


const uniqueNums = arr => {
    const uniqueElements = {};
    arr.forEach(element => uniqueElements[element] = element); // same as your uniqueElements[element] = element
    return Object.values(uniqueElements); // return just the values - Object.keys would return an array of strings
  }
  console.log(uniqueNums([1, 2, 3, 4, 3, 2, 1]))
  

//애너그램 판별 -> 두 단어의 글자 나열 순서는 다르지만 구성이 일치하는 것들
//ex) listen 과 silent
const stringA = "listen"
const stringB = "silent"

//split하여 하나씩 쪼갠뒤, sort로 순서대로 나열, join으로 쪼개진 알파벳을 문자열로 만들어주어 비교
function isAnagram(stra,strb){
    if(stra.length !== strb.length){
        return false;
    }
    return stra.split("").sort().join() === strb.split("").sort().join();
}

console.log(isAnagram(stringA,stringB))

//map = {}
function isAnagramm(stra,strb){
    if(stra.length !== strb.length){
        return false;
    }
    const hashMap = {}
    for(const char of stra){//stringA의 문자 하나하나 
        hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
        //hashMap에 해당 알파벳이 있어? 있으면 +1, 없으면(키는 정의되고 값이 없는 상태)는 1)
        //{l: 1, i: 1, s:1..}로 만들어줌
    }

    for(const char of strb){//stringB의 문자 하나하나 검사하는데
    if(!hashMap[char]){//만약 hashMap 키값으로 해당 알파벳이 없으면
        return false;//false
    }

    hashMap[char]--;//또는 알파벳이 있으면 value에서 1씩 값이 빠지는데, 값이 0일수도, -일수도있음(stringB에서 해당 알파벳이 더 많으면) 
    //하지만, 위의 if(!hashMap[char])조건문에서 값이 0이면 0자체가 false값으로 바로 false리턴
    }
    return true;

    }

    console.log(isAnagramm(stringA,stringB))