function solution(arr) {
    
    //결과 값을 반환하는 변수 answer 생성
    var answer = 0;
    
    //매개변수인 배열 arr 의 요소를 다 더하기
    for( el of arr) {
        answer += el 
    }
    
    // 평균값을 구하기 위해 배열의 길이만큼 나눈 값을 반환
    return answer/ arr.length;
}