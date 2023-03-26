// 못푼건 나중에 풀어야지 하고 미뤄놨다가 못풀었었습니다. ㅠ

//어서오세요 커피전문점 수타박스
function solution(input) {
    let americano = 0
    let cafelatte = 0
    let caramel = 0
    for(i = 0; i < input.length; i++){
        if(input[i] === "아메리카노") americano++;
        else if(input[i] === "카페라떼") cafelatte++;
        else caramel++
    }
  return americano*4100 + cafelatte*4600 + caramel*5100;
}

//좋아하는 숫자만 골라내기
function solution(input) {
    const num_tuple = ['2','3','5','6','7','8','9'];
    let arr = [];
    for(i = 0; i < input.length; i++){
        for(j = 0; j < num_tuple.length; j++){
            if (input[i] == num_tuple[j]) arr.push(num_tuple[j]);
        }
    }if(arr.length > 4) arr.splice(5,arr.length-1)
    return arr;
}


//잘린 피라미드 - 테스트케이스 3 오답
function solution(a, b) {
    arr = [];
    if (!(a < 15 && b > a )) return "오류"
    else if(b >= 15) {
         for(i = a ; i <= 15; i++){
            arr.push("*".repeat(i));
    }
    }
    else{
        for(i = a ; i <= b; i++){
            arr.push("*".repeat(i));
            
        }
    return arr.join("\n")
    }
}


//겹치는 구가 찾기 - 완전 오답, 풀다 맘
function solution(input) {
    let inputArr = input.split("\n")
    let rangeA = [];
    let rangeB = [];
    let arr = [];

    for(i = input[0]; i <= input[1]; i++){
        rangeA.push(i);
    } 
    for(i = input[2]; i <= input[3]; i++){
        rangeB.push(i);
    } 

    for(i = 0; i <= ((rangeA.length >= rangeB.length)?rangeA.length : rangeB.length); i++);
        for(j = 0; j <= i; j++){
            if(rangeA[j] == rangeB[i]) arr.push(rangeA[j])
        }

  return arr.splice(1,arr.length-1);
}

//괄호의 짝 - 테스트케이스 4,5 오답
function solution(string) {
    let arr = string.replace(/[a-z]/g,"")
    const reg = /[\/?.,;:|\*~`!^\-_+<>@\#$%&\\\=\\'\"]/gi;
    let newarr = arr.replace(reg,'');
    
    let emp = [];
    for(i = 0; i < string.length; i++)
    if(newarr[i] == "(") emp.push(i)
    if(newarr[i] == ")") emp.push(i)
    if(newarr[i] == "[") emp.push(i)
    if(newarr[i] == "{") emp.push(i)
    if(newarr[i] == "}") emp.push(i)
     
    return emp[1] - emp[0] % 2 !== 0 && emp[3] - emp[2] % 2 !== 0 && emp[5] - emp[4] % 2 !== 0 ?
    "정상" : "비정상"

}

