function solution(citations) {


    //H-지수(H-Index)
    //전체 논문중 많이 인용된 순으로 정렬한 후, 인용된 수가 논문의 수와 같아지거나, 
    //인용된 수가 논문의 수보다 작아지기 시작하는 숫자가 바로 나의 h가 됩니다.
   


    //논문들을 내림차순으로 정렬
    //반복문을 돌려 논문의 수와 인용된 수가 같거나 작아지는 시점에 answer++
 
    //인용된 수 : [6,5,3,1,0]
    //논문의 수 : [1,2,3,4,5]

 
    citations.sort((a,b) =>  b - a)
    let count = 0;
    for(let i = 0, j = 1; i < citations.length; i++ , j++){   
      if(citations[i] >= j){
        count++
      } 
    }

    return count
    
}