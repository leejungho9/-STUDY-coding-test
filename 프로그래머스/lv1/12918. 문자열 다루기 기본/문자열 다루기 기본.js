function solution(s) {

 
    // 문자열의 길이가 4 또는 6 인지 확인
    //정규표현식과 match 를 사용하여  s 안에 영문자 대소문자가 있는지 확인([a-zA-Z]) , /g는 문자열내에 모든 패턴들을 검색하는 것을 의미
    // 숫자만 있다면 null 반환하므로 true 리턴
    // 문자열의 길이가 4 또는 6 이 아니거나 
    //정규표현식애서 null이 아니였을 경우 false 반환
 
    if(s.length === 4 || s.length === 6) {      
      if( s.match(/[a-zA-Z]/g) === null ) { 
          return true;
      }         
    }

    return false

}

