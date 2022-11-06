function solution(n) {
    var answer = []; //배열인 변수 answer 생성
    var arr =[] // 배열인 변수 arr 생성
    
    // 매개변수인 n의 순서 뒤집어 arr에 담음
    arr = String(n).split('').reverse();

    //arr의 길이만큼 반복문 돌며 하나씩 숫자로 타입 변경
    for(let i = 0; i < arr.length; i++) {
        answer.push(Number(arr[i]))
    }
    
    return answer; //answer 반환
}