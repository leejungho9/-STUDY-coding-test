function solution(n) {
    
    var answer = 0; // 변수 answer 생성
    var sqrt  = Math.sqrt(n);  // n의 제곱근을 담고있는 변수 sqrt 생성
   
    // 조건문으로 sqrt가 양의 정수의 제곱근인지 아닌지 확인 
    // Number.isInteger입력받은 값이 정수인지 판단 정수면 true, 소수면 false 반환
    if(sqrt > 0 && Number.isInteger(sqrt)) {
        // 양의 정수 x의 제곱근이라면 x+1 리턴
        answer = Math.pow((sqrt+1), 2)
    } else {
         // 양의 정수 x의 제곱근이 아니라면 -1리턴
        answer = -1;
    }
    
    return answer; //answer 반환
}