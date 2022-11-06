function solution(n){
    var answer = 0; //결과 값을 반환하는 변수 answer 생성
    n = String(n)  //n의 타입을 문자열로 변환
    
    for(let i = 0; i < n.length; i++) { //반복문을 통해 문자열 인덱스에 접근
        answer += Number(n[i]) //다시 숫자 타입으로 변환 후 하나씩 더해줌
    }
    
    return answer;  //answer 반환
}