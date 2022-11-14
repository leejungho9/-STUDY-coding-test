function solution(n) {


    
    // toString() 특정 요소를 문자열로 반환해준다. 가 정석이지만 원하는 10진수를 특정 진수로 변환하고 싶을 때 사용 O 
    // parseInt()  문자열을 특정 진수의 정수로 변환한다. 인수로는 parseInt('변환시키고자하는 문자열', 해당 수의 진수) 가 들어간다.
    
    
    
    let answer =  n.toString(3).split("").reverse().join("");  //3진법 변환 후 쪼개서 반대로 바꾸고 다시 붙이기
    return   parseInt(answer , 3);                             //3진법의 answer을 10진법으로 변환
}