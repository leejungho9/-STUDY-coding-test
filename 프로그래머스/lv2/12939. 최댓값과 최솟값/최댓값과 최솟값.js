function solution(s) {
    var answer = "";
    var arr = [];
    arr = s.split(" ");
  
    return answer = (Math.min.apply(null, arr)) + " " + (Math.max.apply(null ,arr));
}