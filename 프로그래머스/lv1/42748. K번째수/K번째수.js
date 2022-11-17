function solution(array, commands) {
    var answer = [];
    
    //commands 안에 배열에 접근하기 위해 map 사용 후 반복
    commands.map((command) => {
        
       // array.slice 메서드로 commands[0] - command[1]범위만큼 잘라주고 결과를 sort로 오름차순 정렬함  
        let sliceArr = array.slice(command[0]-1, command[1])
        sliceArr.sort((a, b) => a - b)
        //위에 정렬한 배열을 command[2]-1 범위를 answer에 할당
        answer.push(sliceArr[command[2]-1])

    })
    return answer;
}

//0 : 2 4 1
//1 : 5 4 7
//2 : 3 1 3
