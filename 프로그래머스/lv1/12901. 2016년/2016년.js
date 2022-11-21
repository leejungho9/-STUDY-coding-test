function solution(a, b) {
    var answer = '';
    //요일을 담고 있는 배열 생성
    //매개변수로 들어온 날짜형식을 변수에 할당
    //getDay()메서드는 현지 시간에 따라 지정된 날짜의 요일을 반환함.
    // 일요일 0 월요일 1 화요일 2 .................. 토요일 6
    let day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let date = new Date(`2016-${a}-${b}`);

    return answer = day[date.getDay()];
}
