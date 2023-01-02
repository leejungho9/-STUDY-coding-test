function solution(citations) {

    
    // n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
    // [3, 0, 6, 1, 5]

    //H-지수(H-Index)
    //전체 논문중 많이 인용된 순으로 정렬한 후, 인용된 수가 논문의 수와 같아지거나, 인용된 수가 논문의 수보다 작아지기 시작하는 숫자가 바로 나의 h가 됩니다.
   


    //논문들을 내림차순으로 정렬
    //반복문을 돌려 논문의 수와 인용된 수가 같거나 작아지는 시점에 answer++
 
    //인용된 수 : [6,5,3,1,0]
    //논문의 수 : [1,2,3,4,5]

    let answer = 0;
    citations.sort((a,b) =>  b - a)

    for(let i = 0, j = 1; i < citations.length; i++ , j++){   
      if(citations[i] >= j){
        answer++;
      } 
    }

    return answer
    
}