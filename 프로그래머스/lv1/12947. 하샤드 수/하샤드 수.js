function solution(x) {
  
    var sum = 0; //자릿수의 합을 담고있는 변수 sum 생성
    
    //x를 문자열로 변경
    x = String(x)
    
    //반복문을 통해 x인덱스에 접근해 x의 자릿수의 합 구하기
    for(let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }

    //조건문을 통해 합이 x로 나누어지는지 확인
    if( x % sum === 0) {
        return true;
    } 
     
    return false;

}