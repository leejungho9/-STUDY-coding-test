function solution(numLog) {
    return numLog.reduce((acc, cur, idx, originArr) => {
        if(!idx) return "";
        const prev = originArr[idx-1];
        switch(prev-cur) {
            case -1:
                return acc+'w'
            case 1:
                return acc+'s'
            case -10:
                return acc+'d'
            case 10:
                return acc+'a'
        }
    }, 0)
}