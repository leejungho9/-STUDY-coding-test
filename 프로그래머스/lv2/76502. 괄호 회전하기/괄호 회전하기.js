function solution(s) {
    const open = ["{", "[" ,"("];
    const close = ["}", "]", "}"];
    let answer = 0
    let stack = [];
    for(let el of s) {
        if(open.includes(el)) {
            stack.push(el);
        }else {
            let check = stack.pop();
            console.log(check)
        }

    }

    return answer;
}