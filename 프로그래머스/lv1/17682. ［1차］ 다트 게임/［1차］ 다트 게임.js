function solution(dartResult) {
    let arr = [[],[],[]];   // [[1,S],[2,D*],[3T]]
    
    let str =  dartResult.split(/[0-9]/g).join(",").split(","); //숫자를 다 , 로 바꾼 문자열  ===> ,D,S,T
    let score = dartResult.replace(/[a-zA-Z#*]/g , ',').split(",") // 문자,*,# 을 다 , 로 바꾸고 쉼표로 자르기 ===> 	[ '1', '2', '3', '', '' ]

    let Bonus =  RemoveEmpty(str) //빈문자열 제거하고 배열로 리턴하는 함수 실행  ===> 	[ 'D', 'S', 'T*' ]
    let NumberScore =  RemoveEmpty(score, 'number') //빈문자열 제거, 숫자타입으로 바꾼 배열을 리턴하는 함수 실행 ===> [ 1, 2, 3 ]
    
    
    Bonus.map((el, idx) => { // [[1,S],[2,D*],[3T]] 형태 만들어주기
        arr[idx] = ([NumberScore[idx], el]);
    })
    
    
    // Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서  1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.  
    
    // 점수계산
    
    // [[1,S],[2,D*],[3T]] 형태 만들어주기
    let answer = [[],[],[]]; // 각 점수가 들어갈 곳 ===> 예시 [ 1번 기회 점수,  2번 기회 점수, 3번 기회 점수 ]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][1].length === 1) {  //첫번째 기회에 *과 #이 없는 경우 단순 보너스 계산 실행
            if(arr[i][1] ==='S') {
                answer[i] = Math.pow(arr[i][0], 1)
            } else if(arr[i][1] ==='D') {
                answer[i] = Math.pow(arr[i][0], 2)
            } else if(arr[i][1] ==='T') {
                answer[i] = Math.pow(arr[i][0], 3)
            } 
        }if(arr[i][1][1] === '*') { // *이 있는 경우
            if(arr[i][1].length !== 1) { //첫 번째 순서에 * 이 있는 경우
                if(arr[i][1][0] === 'S') {
                    answer[i-1] *=  2
                    answer[i] = Math.pow(arr[i][0], 1) * 2
                } else if(arr[i][1][0] === 'D') {
                    console.log(answer[i-1]);
                    answer[i-1] *= 2
                    answer[i] = Math.pow(arr[i][0], 2) * 2
                }else if(arr[i][1][0]  === 'T') {
                    answer[i-1] *= 2
                    answer[i] = Math.pow(arr[i][0], 3) * 2
                }
                // [[1,S],[2,D*],[3,T]]
            } else if(arr[i][1].length === 1) { //두, 세 번째순서에 * 이 있는 경우
                if(arr[i][1][0] === 'S') {
                    answer[i-1] *=  2
                    answer[i] = Math.pow(arr[i][0], 1) * 2
                } else if(arr[i][1][0] === 'D') {
                    console.log(answer[i-1]);
                    answer[i-1] *= 2
                    answer[i] = Math.pow(arr[i][0], 2) * 2
                }else if(arr[i][1][0]  === 'T') {
                    answer[i-1] *= 2
                    answer[i] = Math.pow(arr[i][0], 3) * 2
                }
            } 
        }if(arr[i][1][1] === '#') { //첫번째 기회에 #이 있는 경우
            if(arr[i][1][0] === 'S') {
                answer[i] = Math.pow(arr[i][0], 1) * -1
                console.log( Math.pow(arr[i][0], 1) * -1)
            } else if(arr[i][1][0] === 'D') {
                answer[i] = Math.pow(arr[i][0], 2) * -1
                console.log(answer[i])
            } else if(arr[i][1][0]  === 'T') {
                answer[i] = Math.pow(arr[i][0], 3) * -1
            }       
         } 
            
        
    }

    console.log(answer) 
    // [ 1번 기회 점수,  2번 기회 점수, 3번 기회 점수 ] 다 더해서 return 
    return answer.reduce((acc, cur) =>{
        return acc+cur
    })
    
        
}

//공백 제거 후 필요에 따라 number 타입으로 변경하는 함수 
function RemoveEmpty (arr , option) {
    if(option === 'number') {
       let result = arr.filter((el) => el !== '')     
       return result.map((el) => {
             return Number(el)
        })
    } else {
        return arr.filter((el) =>  el !== '')
    }
}





//다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 
//모두가 간단히 즐길 수 있다.

// 다트 게임은 총 3번 기회가 있다 .
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 
// 점수에서  1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 스타상(*) : 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다 
// 아차상(#) : 당첨 시 해당 점수는 마이너스된다.
// 1S 2D* 3T 

// 1번째 기회 Single 1의 1제곱 *2 + 
// 2번째 기회 Doule  2의 2제곱 *2 +
// 3번째 기회 Triple 3의 3제곱 
