//이진탐색

//[1,10,20,47,59,63,75,88,99] (오름차순)
//targer:20
/*target이 중간값보다 작으면 중간값을 기준으로 좌측 아이템 탐색
타겟값이 중간값보다 크면 우측 아이템만 탐색
같은 방법으로 선택된 중간값 비교
해당값 찾을때까지 해당 과정 반복*/

function binarySearch(arr, target){
    let low = 0;
    let high = arr.length-1;
    while(low <= high){
        let middle = Math.floor((low + high)/2)
        if(target < arr[middle]){
            high = middle - 1
        }else if(target > arr[middle]){
            low = middle + 1
        }else{
            return middle
        }

    }
    return -1;
}


