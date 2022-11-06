function solution(num) {
    
    var answer = '';  // 변수 answer 생성
    
    //매개변수 num이 짝수라면 "Even" 반환
    if(num % 2 === 0) {
        answer = "Even";
    } 
    //매개변수 num이 홀수라면 "Odd" 반환
    else {
        answer = "Odd";
    } 
    
    return answer; //answer 반환
}