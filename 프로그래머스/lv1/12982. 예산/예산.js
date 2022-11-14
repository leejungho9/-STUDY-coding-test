function solution(d, budget) {
    var answer = 0;
    
    //d를 오름차순으로 정렬
    d = d.sort((a,b) => a - b)
    
    // 변수 i 를 생성

    
    // budget 이 0보다 클때까지 반복
   for(let i = 0; i < d.length; i++) {

    //buget에서 - 제일 작은 부서의 돈부터 빼줌   
    budget -= d[i]
    
    //buget가 음수가 된다면 return i 
    if(budget < 0 )  {
        return answer ;
     } 
     
       answer++
       
   }
    
    
    return answer;
}