function solution(n) {
    var answer = '';

    //0부터 n이 되기 전까지 반복문 실행 (글자 수 만큼 실행)
    for(let i = 0; i < n; i++) {
      // i가 짝수라면 '수'를 넣어주고 홀수라면 '박'을 넣어줌
      i % 2 === 0 ?   answer += "수" : answer += "박" ;
    }
    
    return answer;
}