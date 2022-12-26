function solution(n, words) {
    let answer = [0,0];
    const checkArr = [words[0]]; // 첫번째 단어를 미리 넣어둠

    for (let i = 1; i < words.length; i++) {    
        let preWord = words[i-1]   //이전 단어
        let word = words[i]    //비교할 단어   
    
        // 이전 단어의 마지막 글자와, 비교할 단어의 첫번째 글자가 같고,  동일한 글자가 없었는지 확인
        if(preWord.charAt(preWord.length-1) === word.charAt(0) && checkArr.indexOf(word) === -1) {
            checkArr.push(word)
        }else {
            // 가장 먼저 탈락하는 사람의 번호, 그 사람이 자신의 몇 번째에 탈락하는 지
            let player = (i+1 % n)
            let round =  Math.floor(i / n) + 1
            return [(i%n) +1, round];
        }    
    }
    return answer
}
