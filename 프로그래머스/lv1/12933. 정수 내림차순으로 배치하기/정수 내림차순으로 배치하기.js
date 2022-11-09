function solution(n) {
    
    //n을 String을 사용해 문자열로 바꿈
    //split으로 하나씩 쪼개 배열로 만든 후
    //sort사용해 내림 차순으로 정렬 ( a - b  오름차순, b - a 내림차순)
    //join 으로 합치기
    
    let answer = '';   
    answer = String(n).split('').sort((a,b) => b - a).join("")
    return  Number(answer)
}