function solution(n, k) {
    
    let coke = Math.floor( n / 10)
    return   n * 12000 + k * 2000 - coke * 2000;
}