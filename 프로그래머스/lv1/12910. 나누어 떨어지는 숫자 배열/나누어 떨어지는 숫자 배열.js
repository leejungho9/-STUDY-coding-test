function solution(arr, divisor) {
    var answer = [];
    
    // arr의 배열의 길이만큼 반복하기 
    // 조건문으로 배열의 요소가 divisor로 나눠지는지 확인 후 나눠지면 answer에 요소 넣어주기
    
    for(let i = 0; i < arr.length ; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i])
        }
    }
    
    // 만약 나눠 떨어지는 요소가 없어 answer의 길이가 0이라면 ? -1 넣어주기
    if(answer.length === 0) {
        answer.push(-1);
    }
    
    // 배열 answer의 요소들을 오름차순으로 정렬
    return answer.sort((a,b) => a - b);
}



