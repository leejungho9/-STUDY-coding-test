function solution(numbers) {
    return numbers.reduce((cur, arr)=> {
        return cur + arr
    }) / numbers.length;
}