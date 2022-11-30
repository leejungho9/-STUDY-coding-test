function solution(n, lost, reserve) {


    // n : 전체 학생의 수 
    // lost : 체육복 도난 당한 학생의 번호
    // reverse : 여벌의 체육복을 가져온 학생
    
    let lostStudent = lost.length;      // 체육복 잃어버린 사람의 수 
    let possible =  n - lostStudent     // 체육 참여가 가능한 사람의 수 (전체 학생수 - 체육복 잃어버린 사람의 수)
    let realLost = [];


    //만약 잃어버린 사람 중에 여분의 체육복이 있는 사람이라면
    for(let i = 0; i < lostStudent;  i++) {
        if(reserve.includes(lost[i])){  
            possible++;
            reserve = reserve.filter((re) =>  re !== lost[i])
        } else {
            realLost.push(lost[i]); //여분이 없는 사람 ==== 진짜 잃어비린 사람
        }
    }

    //진짜 잃어버린 사람의 배열로 조건 돌리기
     for(let i = 0; i < lostStudent;  i++) {
        if(reserve.includes(realLost[i]-1)) {
            possible++;
            reserve = reserve.filter((re) =>  re !== realLost[i]-1)
         }else if(reserve.includes(realLost[i]+1)) {
            possible++;
            reserve = reserve.filter((re) =>  re !== realLost[i]+1)    
        }
    }
    
    
   
    return possible
    
}