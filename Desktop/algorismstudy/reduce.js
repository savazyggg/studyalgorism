//reduce -> hoc
//reduce, reduceRight(콜백함수가 반대서부터 시작)

const arr = [1,2,3,4,5]

//평균값 구하기
const average = (sum, val, i, arr) =>{
    sum += val;
    return i === arr.length - 1? sum/arr.length : sum;
}

console.log(arr.reduce(average))//평균값 출력 -> 3

//최대값 구하기
const max = (x,y) => x > y ? x : y;
console.log(arr.reduce(max)) // 5출력


//문자열 뒤집기
let str = "hello"
const reverse = s => s.split("").reduceRight((x,y)=>x+y);
console.log(reverse(str))//olleh