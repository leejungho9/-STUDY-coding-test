function solution(left, right) {
    var answer = 0;
    
    //left부터 right까지 반복
    for(let i = left; i <= right; i++) {
    
    // 약수인 수를 담아두는 배열 arr 생성
     let arr = []
     // 1부터 i까지 (현재 left) 반복
       for(let j = 1; j <= i; j++) {
          // 1부터 자기자신까지 나눴을 때 0인 수 (약수)를 arr에 넣어줌
          if( i % j === 0) {
              arr.push(j)
          }
        }
        //현재 left 가 13이라면 arr 배열은 [1,13] 이런 모습
        //이 약수가 담긴 배열 arr에 개수가 짝수인지 홀수인지 비교    
        if(arr.length % 2 === 0) {
            // 짝수라면 더하고
             answer += arr[arr.length-1]
        } else {
            // 홀수라면 빼줌
            answer -= arr[arr.length-1]
        }
        
              
    } 



    return answer;
}