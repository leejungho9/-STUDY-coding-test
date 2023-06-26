function solution(a, d, included) {
    var answer = 0;
    let num = a;
    included.forEach((el, idx) => {

        if(el === true){
            answer += num
        }
       num += d

    }) 
    
    return answer;
}