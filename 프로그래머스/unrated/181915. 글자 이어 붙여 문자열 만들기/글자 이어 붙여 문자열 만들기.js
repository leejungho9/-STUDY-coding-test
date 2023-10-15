function solution(my_string, index_list) {
    var answer = '';
    index_list.map((el) => (
       answer += my_string[el]
    ))
    return answer;
}