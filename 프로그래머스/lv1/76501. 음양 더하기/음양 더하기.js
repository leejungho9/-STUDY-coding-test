function solution(absolutes, signs) {
    var answer = 0;
    
    // 배열의 길이만큼 반복문 돌리기
    for(let i = 0; i <= absolutes.length; i++) {
        // signs 인덱스에 하나씩 접근해 true 인지 false인지 확인
        if(signs[i] === true) {
            // true 라면 answer에 absolutes[i] 를 더해줌
            answer += absolutes[i]
        } else if(signs[i] === false) {
             // false라면 answer에 absolutes[i] 를 빼줌
            answer -= absolutes[i]
        }
    }

    
    return answer;
}