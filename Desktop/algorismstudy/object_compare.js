//두 객체 비교하기
const o1 = {
    a : "a",
    b: 1,
    c: ["a","b","c"],
    d:{
        e:null,
        f:-1
    }
}

const o2 ={
    a : "a",
    b: 1,
    c: ["a","b","c"],
    d:{
        e:null,
        f:-1
    }   
}

function isEqual(oA, oB){
    let a = JSON.stringify(oA)//json문자로 변환
    let b = JSON.stringify(oB)

    //여기서바로 a === b 할 수도있지만 순서가 다르면 true 리턴이 되지 않음
    //이에 sort로 정렬해준뒤 문자열 비교

    return a.split("").sort().join("")===b.split("").sort().join("")
}


function isEqual(oA, oB){
    const checkObjects = oA && oB && typeof oA === 'object' && typeof oB === 'object';//유효성체크 (undefied) type체크
    if(checkObjects && Object.keys(oA).length === Object.keys(oB).length){//사이즈 비교
        return Object.keys(oA).reduce((equal, key) => {
            return equal && isEqual(oA[key], oB[key])
        }, true)
    }else{
        return oA === oB
    }

    }
