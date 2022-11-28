function solution(lottos, win_nums) {

    //1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다.
    //알아볼 수 없는 번호를 0으로 표기하기로 하고
    //민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
  
    
    
    //최고 순위 지금 현재 복권에서 당첨된 수 + 0의 개수
    //최저 순위 지금 현재 복권에서 당첨된 수 || 0만 있다면 0의 개수
    
    let answer = [];
  
    let wins = lottos.filter(lotto => win_nums.includes(lotto)).length; // 맞춘 개수 
    let zero = lottos.filter(lotto => lotto === 0).length;              // 0의 개수
     
    let Max = 7 - (wins + zero);  //최대로 맞춘 등수  ==> 지금 현재 복권에서 당첨된 수 + 0의 개수
    let Min = 7 - wins;           //최소로 맞춘 등수  ==> 지금 현재 복권에서 당첨된 수
     
 
    if(wins === 0 && zero === 0) { //맞춘 번호도 , 0도 없는 경우
        Max = 6;  
        Min = 6;
    }else if(wins === 0) {  //맞춘 번호만 없는 경우 
        Min = 6;
    }


    answer.push(Max, Min); 
    
    
    return answer;
}

