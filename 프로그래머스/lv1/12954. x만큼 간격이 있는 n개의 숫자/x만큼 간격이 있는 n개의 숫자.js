function solution(x, n) {
    var answer = []; // 변수 answer 생성
    
    //매개변수 x부터 배열의 길이가 n보다 작을때 까지 반복하며 x만큼 증가하도록 반복문 작성 *answer.length는 0부터 시작함*
    for(let i = x; answer.length < n; i += x) {
        answer.push(i)   
    }
    
    return answer; // answer 반환
}