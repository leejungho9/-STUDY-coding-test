function solution(a, b) {
    var answer = '';
    let day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    // getDay가 반환하는 요일 값의 범위는 일요일(0) 부터 토요일(6) 입니다.
    

    let date = `2016-${a}-${b}`
    

    answer = day[new Date(date).getDay()];
    
  
    return answer;
}
