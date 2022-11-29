function solution(participant, completion) {
    var answer = ' ';
    
    //문자열 정렬이니까 매개변수 생략, sort()
    completion.sort();  
    participant.sort();

    //마라톤 참여한 선수 길이만큼 반복 후 완주한 선수의 배열과 비교해서 다르면 return
     for(let i = 0; i < participant.length;i++) {
        if(participant[i] !== completion[i]){
            return participant[i];
        }
     }
}