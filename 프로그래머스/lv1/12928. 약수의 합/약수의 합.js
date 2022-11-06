function solution(n) {
    
    //결과 값을 반환하는 변수 answer 생성
    var answer = 0;
    
    //1부터 n까지 반복하기
    for(let i = 1; i <= n; i++) {
        // n을 i로 나눴을 때 나머지가 0이라면 
        // 약수이므로 answer에 더하면서 대입
        if(  n % i === 0 ) {
            answer += i
        }
    }
    // answer 반환
    return answer;
}