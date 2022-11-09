function solution(num) {
    var answer = 0; // 반복할 떄마다 횟수가 올라가는 카운트 개념으로 answer 변수 사용

  
    //500번 반복하고 반복할 떄까지 1이 되지 않는다면 -1 리턴
    

    for(let i = 0; i <= 500; i++) {
        if(num === 1)  return answer;
        if(num % 2 === 0) {      // 입력된 수가 짝수라면 2로 나누기
            num = num / 2
        } else {                 // 입력된 수가 홀수라면 3을 곱하고 1을 더하기
            num = (num*3 + 1)
        }
            answer++              //위 작업을 모두 끝냈으면 answer +1 하기
    }
    
    
    return -1;
}
