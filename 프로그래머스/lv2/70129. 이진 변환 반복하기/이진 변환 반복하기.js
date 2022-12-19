function solution(s) {
    const answer = [0,0];

    while(1) { //무한 반복 
        const clength = s.split('').filter(i => i !== '0').join('').length; 
        answer[1] += s.split('').filter(i => i=== '0').join('').length;  //0의 개수 count 하기
       
        answer[0] += 1;                     //2진 변환 횟수 count 하기    
        if(clength.toString(2) === '1') {  //clength를 2진수로 변환한 값이 1이라면 return 하기
            return answer;                  
        }
        s = clength.toString(2);           //아니라면 그냥 s에 clength를 2진수로 변환한 값을 넣어주기
    }
    

}