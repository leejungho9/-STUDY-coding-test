function solution(n) {
    var answer = 0;
    
    //무한 반복 
    while(true) {
        // n을 0부터 나누면서 나머지가 1이 되면 answer 리턴
        if(n % answer === 1) {
            return answer;
        }// 나머지가 1이 아니라면 answer을 1씩 증가
         answer ++;
    }
}