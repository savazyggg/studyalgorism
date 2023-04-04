//2d array(나선 순환)

/* 1. 4곳의 코너 포인터를 각각 변수에 저장, 초기화
2. top left코너에서 시작, 첫번째 row 왼쪽 -> 오른쪽 순회, 순회가 끝나면 top 포인터+1
3. right top 코너에서 시작. 맨우측 위 -> 아래로 순회 순회끝나면 right 포인터 -1 감소
4. right bottom 코너에서 시작 맨 우측 오른쪽 -> 왼쪽으로 순회, 순회후 bototom 포인터 -1 감소
5. left 포인터에서 시작, 왼쪽 -> 오른쪽 순회 left포인터 +1
*/

 const test1 =[[1,2,3],[4,5,6,],[7,8,9]] //[1,2,3,6,9,8,7,4,5]
 const test2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] // [1,2,3,4,8,12,11,10,9,5,6,7]
 
 function spiraMatrix(matrix){
    const result = [];

    let left = 0;
    let right = matrix[0].length - 1 //3
    let top = 0
    let bottom = matrix.length - 1 //2

    while(left <= right && top <= bottom){
        for(let i= left; i <= right; i++){
            result.push(matrix[top][i])
        }
        top++;

        for(let i=top; i <= bottom; i++){
            result.push(matrix[i][right])
        }
        right--;

        if(top <= bottom){
            for(let i = right; i>= left; i--){
                result.push(matrix[bottom][i])
            }
            bottom--;
        }
        if(left <= right){
            for(let i = bottom; i >= top; i--){
                result.push(matrix[i][left])
            }
            left++;
        }
    }
    return result;
 }