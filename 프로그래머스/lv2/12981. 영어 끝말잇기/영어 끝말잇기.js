function solution(n, words) {
    let answer = [];
    const checkArr = [words[0]];

    for (let i = 1; i < words.length; i++) {
        i
        const beforeWord = words[i-1]   //이전 단어
        const currentWord = words[i]    //비교할 단어   

        beforeWord
        currentWord

    

        // 첫 글자의 마지막 글자와, 두 번째 글자의 첫번째 글자가 같고   동일한 글자가 없는지 확인
        if(beforeWord.charAt(beforeWord.length-1) === currentWord.charAt(0) && checkArr.indexOf(currentWord) === -1) {
            checkArr.push(currentWord)
        }else {
            // 가장 먼저 탈락하는 사람의 번호, 그 사람이 자신의 몇 번째에 탈락하는 지
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }    
    
    }
    return [0,0]
}
