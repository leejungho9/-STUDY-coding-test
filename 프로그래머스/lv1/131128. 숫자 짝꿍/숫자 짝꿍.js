function solution(X, Y) {

  
    let arrX = [...X] //	[ '1', '0', '0' ]
    let arrY = [...Y] //    [1, 2, 3, 4, 5, 0]  

    let x = [];    // [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]
    let y = [];    // [1, 0, 1, 0, 0, 2, 0, 0, 0, 0]
   

    
    for(let i = 0; i < 10; i++) {
        x[i] = arrX.filter((el) => Number(el) === i).length;
        y[i] = arrY.filter((el) => Number(el) === i).length;
    }
    
    let result = [];
    for(let j=0; j < x.length; j++) {
        let  sameCount  = 0;
        if(x[j] !== 0 && y[j] !== 0) {
           sameCount =  Math.min(x[j], y[j])
           result.push(String(j).repeat(sameCount)) 
        }
    }
    

    result = result.join("").split("")
    console.log( result.sort((a,b) => b-a))
      
    if(!result.length) {
        return "-1"
    }else if(result[0] === '0') {
        return '0'
    } 
    
    return result.join("")
    
}

// X와 Y를 돌면서 공통적인 수가 있음 표시하기
// 공통된 수를 조합해서 가장 큰 정수를 구하기


//공통된 수가 없으면 - 1 리턴
//공통된 수가 짝수일 때만 사용할 수 있음


    
    // for(let i = 0; i < arrX.length; i) {
    //     if(arrY.includes(arrX[i])){
    //         let indexX = arrX.indexOf(arrX[i]);
    //         let indexY = arrY.indexOf(arrX[i]);
    //         same.push(arrX[i])
    //         arrX.splice(indexX,1)
    //         arrY.splice(indexY,1)
    //     } else {
    //         i++;
    //     }
    // }



    
//테스트 11 〉	실패 (시간 초과)
//테스트 12 〉	실패 (시간 초과)
//테스트 13 〉	실패 (시간 초과)
//테스트 14 〉	실패 (시간 초과)
//테스트 15 〉	실패 (시간 초과)
