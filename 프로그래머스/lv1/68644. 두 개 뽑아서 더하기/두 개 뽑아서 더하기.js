function solution(numbers) {
    var answer = [];
    
    
    //이중 for문을 사용해 numbers[i] + number[i+1] 를 변수 sum에 할당  
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j]
            // console.log(sum) // 2 3 4 5 3 4 5 5 6 7  중복값 생기니까 아래 조건 달기
    
            //answer에 indexOf해서 sum한 값이 없다면 answer에 넣기
            if ( answer.indexOf(sum) === -1) { 
                answer.push(sum);
            }
        }
    }
    
    return answer.sort((a,b)=> a-b);
}
