function solution(N, stages) {
    var answers = [];
    
    // 1부터 N(스테이지의 개수)까지 반복하는데 
    for(let i = 1; i <=N; i++) {
        //해당 스테이지의 도전자의 수를 filter로 걸러주고 그 배열의 길이를 변수 challenger 담음
        const challenger  = stages.filter((stage) => stage >= i).length;
        //해당 스테이지 실패자를 filter로 걸러주고 그 배열의 길이를 변수 notPass 담음
        const notPass = stages.filter((stage) => stage === i).length;
        console.log(notPass)
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





//     //5개의 스테이지  단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
//     //[2,1,2,6,2,4,3,3]  // 사람 수 
//     // 1스테이지 1명  8명 중 1명   1/8
//     // 2스테이지 3명  7명 중 3명   3/7
//     // 3스테이츠 2명  4명 중 2명   2/4
//     // 4스테이지 1명  2명 중 1명   1/2
//     // 5스테이지 0명  1명 중 1명   0/1

