function solution(n) {
    let answer = 0;
    const memo = [0,1,2]

    for(let i = 3; i <= n; i++ ){
        memo[i] = (memo[i-2] + memo[i-1]) % 1234567  
    }
    return memo[n] 


}

