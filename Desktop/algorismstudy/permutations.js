//순열
/* 주어진 n엘레먼트들의 모든 경우의 수를 계산하는 방법
예제 input [1,2] -> output [[1,2],[2,1]]*/

function permutate(arr){
    const result = [];

    const dfs = (i,arr) =>{
        //base condition : 인덱스가 우리가 입력받은 인풋 길이와 같을때
        if(i === arr.length){
            return result.push([...arr])
        }

        for(let j=i; j < arr.length; j++){
            //swap
            [arr[i], arr[j]] == [arr[j], arr[i]]
            //dfs
            dfs(i + 1, arr);
            //swap back
            [arr[i], arr[j]] == [arr[j], arr[i]]
        }

    }
    dfs(0, arr);
    return result;
}

console.log(permutate(["a","b","c"]))