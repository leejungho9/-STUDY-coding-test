function solution(s) {
    var answer = '';
    //s를 배열로 바꾸고 sort()으로 정렬
    // reverse()를 사용해 내림차순으로 만듦
    // 다시 join 으로 합쳐 문자열로 반환
    answer = s.split('').sort().reverse().join("");
    return answer;
}