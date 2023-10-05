function solution(my_string, letter) {
    const answer = Array.from(my_string).filter((el) => el !== letter )
    return answer.join("")
}