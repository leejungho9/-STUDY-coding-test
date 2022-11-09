function solution(phone_number) {
    var answer = '';
 
    // phone_number 길이-4까지 answer에 * 추가하기
    for(let i = 1; i<= phone_number.length-4; i++) {
        answer += "*";
    }
    // answer 과 phone_number 마지막 4글자 붙이기
    return   answer + phone_number.slice(-4) ;
}

