function solution(price, money, count) {
    var answer = 0;
    
    //놀이기구를 N 번째 이영하면 원래 이용료의 N배를 받김
    //처음 이용료가 100 이라면 2번째는 200, 3번째는 300으로 요금이 인상
    

    for(let i = 1; i <=count; i++ ) {
        answer += price*i;
    }

    if(answer > money) {
        return answer-money
    } else {
        return 0
    }
    
}