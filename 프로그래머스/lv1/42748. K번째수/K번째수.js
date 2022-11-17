function solution(array, commands) {
    var answer = [];
    
    commands.map((command, i) => {
     
       let sliceArr = array.slice(command[0]-1, command[1])
       let sortArr = sliceArr.sort((a, b) => a - b)
   
      answer.push(sliceArr[command[2]-1])
       

        
    })
    return answer;
}

//0 : 2 4 1
//1 : 5 4 7
//2 : 3 1 3