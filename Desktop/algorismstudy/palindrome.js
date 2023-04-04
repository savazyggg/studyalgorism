//level, eye 같이 거꾸로 읽어도 똑같은 문자 판별

//for 문으로 뒤집어서 만들어놓고 같은지를 확인
function checkP(str){
    let reversed = "";
    for(let i = str.length-1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed === str

}


//two point 활용
//시작 끝을 하나씩 비교해나가는것

function checkPalin(str){
    const len = str.length
    const middle = Math.floor(len/2)
    for(let i = 0; i < middle; i++){
        if(str.charAt(i) !== str.charAt(len-1-i))
        {return false;
    }
}
return true;
}