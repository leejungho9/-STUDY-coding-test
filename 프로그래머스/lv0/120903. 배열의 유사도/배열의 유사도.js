function solution(s1, s2) {
    let count = 0;
    
    s1.map((el) => {
        s2.includes(el) ? count++ : null;
    })
    
    return count;
}