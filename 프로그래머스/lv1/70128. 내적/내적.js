function solution(a, b) {
    var answer = 0;
    
    // a의 배열의 길이만큼 반복문을 돌기
    for(let i = 0;  i < a.length; i++) {
        //a[i] 와 b[i] 곱하고 answer에 누적하기
         answer += a[i] * b[i]
    }
    
    return answer 
}