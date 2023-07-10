function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b) => a-b)

    return numbers[numbers.length - 1] * numbers[numbers.length - 2]
}