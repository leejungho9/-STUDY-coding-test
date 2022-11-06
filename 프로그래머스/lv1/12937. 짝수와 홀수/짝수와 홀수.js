function solution(num) {
    
    //결과 값을 반환하는 변수 answer 생성
    var answer = '';
    
    //매개변수 num이 짝수라면 "Even" 반환
    if(num % 2 === 0) {
        answer = "Even";
    } 
    //매개변수 num이 홀수라면 "Odd" 반환
    else {
        answer = "Odd";
    } 
    
    return answer;
}