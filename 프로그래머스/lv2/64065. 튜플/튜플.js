function solution(s) {

    const str = s.replaceAll('{', ' ').replaceAll("}", " ").split(", ")
   
    const arr =  str.map(el => {
        return el.trim().split(",");
    })

    arr.sort((a,b) => a.length - b.length)
    arr
    
    const answer =  []
    for(let el of arr) {
        el.map((e) => {
            if(!answer.includes(e)){
                answer.push(e)
            }
        })
    }


    return answer.map(el=> Number(el));
}