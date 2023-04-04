//merge intervals
let merge = function(interval){
    //구간 시작 시간 기준으로 정렬
    //이전 구간의 끝시간 >= 그 다음 구간의 시작시간 -> 병합
    //아닐 경우 병합 x -> 결과 리스트에 추가
if(interval.length === 0){
    return []
}else if(interval.length === 1){
    return interval;//[[1,2]]
}

interval.sort((a,b)=>a[0] - b[0])
let result = [interval[0]]
for(let intervals of interval){
    let previous = result[result.length-1]
    if(previous[1] >= interval[0]){
        previous[1] = Math.max(previous[1], interval[1])
    }else{
        result.push(interval)
    }
}
return result;

}