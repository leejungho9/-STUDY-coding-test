function solution(participant, completion) {
    var answer = ' ';
    completion.sort();
    participant.sort();
    
     for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}