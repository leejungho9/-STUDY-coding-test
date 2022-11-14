function solution(arr1, arr2) {

    
    let answer = [];
    // 0부터 arr1 혹은 arr2 길이보다 작을 때까지 반복
    for(let i = 0; i < arr1.length; i++) {
        let inner = []
        // arr1[0] 혹은 arr2[0] 길이보다 작을 때까지 반복
        for(let j = 0; j < arr1[0].length; j++ ) {
            inner.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(inner)
    
    }
    return answer;
}
