function solution(a, b) {
    var answer = 0;
    
    //a,b 중 가장 작은 값을 i 의 초기값으로 대입
    //a,b 중 가장 큰 값과 i가 같아질 때까지 반복
    //반복문을 돌 동안 i 를 모두 더해 answer 에 할당
    
    for( let i = Math.min(a,b); i <= Math.max(a,b); i++) {
        answer += i
    }
    
    return answer;
}