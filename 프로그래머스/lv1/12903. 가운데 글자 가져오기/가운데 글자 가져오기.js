function solution(s) {
    var answer = '';
    
    
    // 문자열 s 의 길이가 짝수인지 홀수인지 확인
    if( s.length % 2 === 0) {
        // 짝수라면 slice를 사용해 문자열의 길이를 반으로 나누고 -1 해줌 (인덱스 0 부터 시작하기 때문에)
        // 만약 s의 길이가 4라면 2가 나오고 -1 한 1부터 , 2(3-1) 까지 잘라주기 떄문에 인덱스 1,2 가 출력
         answer = s.slice((s.length/2)-1 ,(s.length/2) + 1);
    } else {
        // 홀수라면 slice를 사용해 문자열의 길이를 반으로 나누고 
        // 만약 s의 길이가 3라면 1이 나오고 1부터 , 1(2-1) 까지 잘라주기 떄문에 인덱스 1만 출력
       answer = s.slice((s.length/2), (s.length/2)+1)
    }
    
    
    return answer;
}