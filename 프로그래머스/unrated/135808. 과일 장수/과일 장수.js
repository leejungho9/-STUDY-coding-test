function solution(k, m, score) {
    let count = 0;
    const appleBox = [];
    
    // 사과를 상자에 담기 위한 코드 
    score = score.sort((a,b) =>  b-a); // 가장 비싼 사과들 부터 묶기 위해 내림차순

    for(let i = 0; i < score.length; i += m){ //   한 상자에 들어가는 수만큼 appleBox에 넣어주기 
        appleBox.push(score.slice(i, i+m))    //	[ [ 3, 3, 2, 2 ], [ 1, 1, 1 ] ]
    } 

    // 담긴 사과상자의 점수 계산 코드
    let result = 0; 
    
    
    for(let j = 0; j < appleBox.length; j++){                   // appleBox = [[ 3, 3, 2, 2 ], [ 1, 1, 1 ] ]
        if(appleBox[j].length === m){                          // appleBox의 요소 길이가 m과 같다면 판매가능      
           result += appleBox[j][appleBox[j].length-1]*m*1;     // 최저 사과 점수 X 한 상자에 담긴 사과 개수 x 상자의 개수
        }
    }

    return result
}
