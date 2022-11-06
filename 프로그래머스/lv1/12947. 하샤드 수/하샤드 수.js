function solution(x) {
  
    var sum = 0; //자릿수의 합을 담고있는 변수 sum 생성
    
    //x를 문자열로 변경
    x = String(x)
    
    //반복문을 통해 x인덱스에 접근
    for(let i = 0; i < x.length; i++) {
        //다시 숫자 타입으로 변경 후 sum에 더하면서 대입 
        sum += Number(x[i]);
    }

    //조건문을 통해 합이 x로 나누어지는지 확인
    if( x % sum === 0) {
        return true;
    } 
     
    return false;

}