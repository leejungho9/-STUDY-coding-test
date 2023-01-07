function solution(progresses, speeds) {
    //progresses 작업의 진도
    //speeds     개발 속도

    //배포는 하루에 한 번
    //각 배포마다 몇 개의 기능이 배포되는지

    let answer = [];

    
    let depoly = [];

    for(let i = 0; i < progresses.length; i++) {
        depoly.push(fun1(100-progresses[i], speeds[i]))
    }
    
    // depoly 

    // 5
    // max = 5 next = 10
    // 5일에 배포 1
    // max = 10 next = 1 
    // 10일에 배포 1 적립
    // max = 10 next = 1
    // 10일에 배포 1 적립
    // max = 10 next = 20
    // 앞 전꺼 배포 

    let save = [];
    let max = depoly[0]
    
    let count = 0;
    for(let j = 0; j < depoly.length; j++) {

        if( max < depoly[j+1]){
            if(count === 0){
                save.push(1)
                max = depoly[j+1]
            }else {
                count++
                save.push(count)
                max = depoly[j+1]
                count = 0;
            }
        }else {
            count++
        }
    }
    
    if(count !== 0){
        save.push(count)
    }

    return save;
}

function fun1(num1, num2) {

    let count = 0;
    let sum = 0;
    while(true) {
        if(num1 <= sum) {
            return count;
        }else {
            num2
            sum += num2;
            count++;
            
        }
    }
    
}
