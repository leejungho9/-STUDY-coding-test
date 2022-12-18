
function solution(s) {
    //count로 ( 왼쪽괄호면 +1 ) 오른쪽 괄호면 -1 해주기
    //괄호가 바르게 짝지어졌다면 count는 0이 될거임 
    let count = 0;
     

    for(let el of s) {
        if(el === "(") {
            count += 1;
        }
        if(el === ')'){
            count -= 1;
        }
          if (count < 0) {
        return false
    }
    }
    
  
    return count === 0;
  }
  

