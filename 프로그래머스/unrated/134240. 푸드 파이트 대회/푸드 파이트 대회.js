function solution(food) {
    var answer = '';
    
    // 각 요소가 짝수면  다 사용 가능
    // 각 요소 중 하나라도 홀수라면 -1 하고 사용 가능
    
    for(let i = 1; i < food.length; i++) {
        for(let j = 1; j < food.length; j++ ){
            if(i === j) {
                if(food[i] % 2 === 0) {
                    answer+= String(j).repeat(food[i]/2)
                } else if((food[i] % 2 === 1))  {
                    answer+= String(j).repeat((food[i]-1)/2)
                }
            }
        }
    }


    return answer + "0"+ answer.split("").reverse().join("")
}
    
