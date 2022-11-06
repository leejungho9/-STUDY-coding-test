function solution(s){
    
    var answer = true; // 변수 answer 생성
    var p = 0; //p의 개수를 담고 있는 변수 생성
    var y = 0; //y의 개수를 담고 있는 변수 생성
    
    // 매개변수의 s를 모두 소문자로 변경
    s  = s.toLowerCase();
    //반복문을 통해 p와 y의 개수 세기
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'p') {  // p라면 p의 값 1 증가
            p++;
        } else if(s[i] === 'y') { // y라면 p의 값 1 증가
            y++;
        }
    }

    //조건문으로 p와 y의 개수 비교
    if(p === y) {
    //p와 y의 개수가 같으면 True 반환        
        answer = true
    } else {
    //p와 y의 개수가 다르면 False 반환
        answer = false
    }

    return answer; //answer 반환
}