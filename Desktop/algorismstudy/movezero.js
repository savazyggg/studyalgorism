//move zeros 제로를 끝으로 옮기고, 제로 전까지는 오름차순으로 정렬
//input : num = [0,1,0,3,12] -> output : [1,3,12,0,0]

const moveZero = function(num){
    let j = 0;
    for(i = 0; i < num.length; i++){
        if(num[i] !== 0){
        let temp = num[j]
        num[j] = num[i]
        num[i] = temp

        j++
        }
    }
    return num
}


/*
let arr1 = [0,1,0,3,12]

const moveZero = function(num){
  let zero = []
  let notzero = []
  let answer = []
  for(i = 0; i < num.length; i++){
    if(num[i] == 0) {
      zero.push(0)
    }else{
      notzero.push(num[i])
  } 
  
}
  answer.push(notzero.sort((a,b) => a-b))
  answer.push(zero)
  return answer.flat()
  
}

moveZero(arr1)
*/