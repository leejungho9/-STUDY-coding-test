function solution(numbers) {
    var answer = 0;
 
    // 0부터 9까지 반복문 실행
    for(let i = 0; i <= 9; i++) {   
        // i가 numbers에 포함되어 있는지 아닌지 확인
        if(!numbers.includes(i)) {
            // numbers에서 찾을 수 없는 0부터 9까지의 수가 있다면 answer에 더함
            answer += i ;  
        }          
    }
        
        
    return answer;
}