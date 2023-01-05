function solution(arr1, arr2) {
    var answer = [];

  

    for(let i = 0; i < arr1.length; i++) {
        let save = [];
        for(let k = 0; k < arr2[0].length; k++) {        
            let sum = 0;
            for(let j = 0; j < arr2.length; j++) {
                sum += arr1[i][j] * arr2[j][k]                                                                                                   
            }  
            save.push(sum)    
        }
        answer.push(save)
    }

    return answer;
    
 }   
    