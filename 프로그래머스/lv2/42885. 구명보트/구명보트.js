function solution(people, limit) {
    let answer = 0;
    people.sort((a,b)=>b - a); //내림차순 [80, 70, 50, 50]
    
    let peopleLength = people.length;
    
    //내림차순 [80, 70, 50, 50]
    //               length
    for(let i = 0; i < peopleLength; i++){

        //80 + 50 -> answer++ 
        //70 + 50 -> answer++
        //50 + 50 -> peoplelength-1  후 answer++ (두 명 보트에 태움)
        //i와 peoplelength-1 의 길이가 같아져 반복문이 종료 ..
        
        //제일 무거운사람과 제일 가벼운 사람을 조합해서 보트에 타지면 people--
        if(people[i] + people[peopleLength-1] <= limit){
            peopleLength--;
        }
        
        //limit을 넘어가면 그냥 answer++하기
        answer++;
    }
    return answer;
}


