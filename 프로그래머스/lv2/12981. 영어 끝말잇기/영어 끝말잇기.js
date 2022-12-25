function solution(n, words) {
    let answer = [0,0];
    const checkArr = [words[0]];

    for (let i = 1; i < words.length; i++) {    
        let word = words[i-1]   //이전 단어
        let curword = words[i]    //비교할 단어   
    
        // 첫 글자의 마지막 글자와, 두 번째 글자의 첫번째 글자가 같고  동일한 글자가 없는지 확인
        if(word.charAt(word.length-1) === curword.charAt(0) && checkArr.indexOf(curword) === -1) {
            checkArr.push(curword)
        }else {
            // 가장 먼저 탈락하는 사람의 번호, 그 사람이 자신의 몇 번째에 탈락하는 지
            let player = (i%n) +1 
            let round =  Math.floor(i / n) + 1
            return [(i%n) +1, round];
        }    
    }
    return answer
}
