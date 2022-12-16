function solution(A,B){
    let answer = 0;
    //누적된 값이 최소가 되도록 만들기 위해서는 [제일 작은 값 *  제일 큰 값] 형태로 만들어줘야힘
    
    A.sort((a,b) => a-b) // A는 오름차순 정렬 [1, 2, 4]
    B.sort((a,b) => b-a) // B는 내림차순 정렬 [5, 4, 4]
 
    for(i in A ) { //for in 문 돌려서 배열 요소끼리 곱하고 anwer에 담기
       answer +=  A[i] * B[i]
    }
    return answer;
}