function solution(money) {
    money = String(money)
    let m = money.split(",").join("")
    
    let i = parseInt(money/5500);
    let j = money-(5500*i)
    return [ i,  j]
}