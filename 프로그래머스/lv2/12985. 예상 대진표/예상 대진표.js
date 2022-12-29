function solution(n,a,b) {
    //
    //          예상 대진표
    // 
    //          1 [A  B]    
    //
    //       1[? A]   2[? B]    
    //
    //  1[1 2] 2[3 A] 3[5 6] 4[B 8]
    //
    //
    // 1,2 / 3,4 / 5,6 / 7,8
    // 다음 라운드의  팀 번호는 = 자신의 참가자 번호의 / 2 이므로, 홀수일 경우를 숫자를 올림한 ceil 사용
    //  팀 번호가 같아질 때까지 반복, 같아지면 같은 라운드라는 의미로 변수 round 반환
    //
    
    let round = 0; // 라운드의 수 
    while(true) { // 무한반복
        round++; 
        a = Math.ceil(a/2)  //2, 1, 1
        b = Math.ceil(b/2)  //4, 2, 1
        if(a === b) return round
    }
    
}