function solution(N, stages) {
    var answers = [];
    
    // 1부터 N(스테이지의 개수)까지 반복하는데 
    for(let i = 1; i <=N; i++) {
        //해당 스테이지의 도전자의 수를 filter로 걸러주고 그 배열의 길이를 변수 challenger 담음
        const challenger  = stages.filter((stage) => stage >= i).length;
        //해당 스테이지 실패자를 filter로 걸러주고 그 배열의 길이를 변수 notPass 담음
        const notPass = stages.filter((stage) => stage === i).length;
        //[스테이지 번호, 실패자/ 도전자 수] 를 answers에 넣어줌
        answers.push([i, notPass/challenger]);
    }

    //실패율을 계산값을 기준으로 내림차순 정렬 
    //ex [ 1, 0.125 ] 실패율 계산값은 인덱스[1]에 있음
    answers.sort((a,b) => b[1] - a[1]);

    //정렬된 배열을 map돌아서 스테이지 번호만 뽑아오기 
    //ex [ 1, 0.125 ] 스테이지 번호는 인덱스[0]에 있음
    return answers.map((answer) => answer[0]);
}





// function solution(N, stages) {
//     let answer = [];

//     const count = new Array(stages.length).fill(0);
    
    
//     stages = stages.sort((a,b) => a -b)

//     //	[ 1, 2, 2, 2, 3, 3, 4, 6]
//     for(let i = 0; i < stages.length; i++) {
//         for(let j = 0; j < stages.length; j++) {
//             // i = 0 이라면 stages[0] === 1 ? count[0]++;
//             // i = 0 이라면 stages[0] === 2 ? count[0]++;
//              stages[i] === j ? count[j] += 1 : null  //각각 스테이지에 머문 사람들의 수를 배열에 담음
//         }
//     }
//     // stage number
//     // [0, 1, 2, 3, 4, 5, 6, 7]
    
//     // stage user
//     // [0, 1, 3, 2, 1, 0, 1, 0]
    
    
//     //[0, ]
//     return count;
    
    
    
//     //실패율  => 테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    
//     //5개의 스테이지  단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
//     //[2,1,2,6,2,4,3,3]  // 사람 수 
//     // 1스테이지 1명  8명 중 1명   1/8
//     // 2스테이지 3명  7명 중 3명   3/7
//     // 3스테이츠 2명  4명 중 2명   2/4
//     // 4스테이지 1명  2명 중 1명   1/2
//     // 5스테이지 0명  1명 중 1명   0/1

//     // 3 , 4 ,2 ,1 5

// }