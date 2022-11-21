function solution(number) {
    var answer = 0;
    let count = 0;
    
    
    // 삼중 for문을 사용해 각 i=0; j=i+1; l=j+1  사용
    for(let i = 0; i < number.length; i++) {
        for(let j = i+1; j < number.length; j++) {
            for(let l= j+1; l < number.length; l++) {
                    
                //.. 차례대로 l 반복끝나면 j 반복 끝나면 i 반복해서 세개씩 다 더하기
                answer = number[i] + number[j] + number[l]
                
                //세 개의 인덱스의 수를 더 했을 때 0이 된다면 count올리고 아니면 null;
                answer === 0 ? count++ :  null;
            

            }
        }
    }
    return count;
}

    //console.log(answer)
    // -2 + 3 + 0 = 1 
    // -2 + 3 + 2 = 3
    // -2 + 3 - 5 = -4
    // -2 + 0 + 2 = 0
    // -2 + 0 - 5 = -7
    // -2 + 2 - 5 = -5
    //  3 + 0 + 2 = 5
    //  3 + 0 - 5 = -2
    //  3 + 2 - 5 = 0
    //  0 + 2 - 5 = 3
    // .. 차례대로 l 반복끝나면 j 반복 끝나면 i 반복해서 세개씩 다 더하기