function solution(s) {
    var answer = '';
    
    let arr = [];
    // 문자열 s의 길이만큼 반복
    // i가 짝수일 때 s[i]에 toUpperCase() 하고 answer에 넣기
    // i가 홀수일 때 s[i]에 toLowerCase() 하고 answer에 넣기
    
    arr = s.split(" ")
        
    
    for(let i = 0; i < arr.length; i++) {
        let str =  arr[i].split("")  
        for(let j = 0; j < str.length; j++) {
            j % 2 === 0 ? answer += str[j].toUpperCase() : answer += str[j].toLowerCase()
        } 
        
       answer += " "
        
    
    
    }
    return answer.slice(0, answer.length-1);
}


