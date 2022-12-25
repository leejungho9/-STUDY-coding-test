function solution(people, limit) {
    let answer = 0;
    people.sort((a,b)=>b - a); //내림차순 [80, 70, 50, 50]
    
    let peopleLength = people.length;
    //wp일 무거운사람과 제일 가벼운 사람을 조합

    for(let i = 0; i < peopleLength; i++){

        //80 + 50 , 70 + 50 , 50 + 50
        if(people[i]+people[peopleLength-1]<=limit){
            peopleLength--;
        }
        answer++;
    }
    return answer;
}
