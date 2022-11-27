function solution(dartResult) {
    let answer = [];
    let arr = [[],[],[]];
    let str =  dartResult.split(/[0-9]/g).join(",") //숫자를 다 , 로 바꾼 문자열  ===> ,D,S,T
   
    let score = dartResult.replace(/[a-zA-Z#*]/g , ',') // 문자,*,# 을 다 , 로 바꾼 문자열  ===> 1,2,,3,
    score = score.replace(',,',',').split(",");                   // 1,2,,3, 연속된 쉼표를 하나의 쉼표로 바꿔줌 1,2,3,
    console.log(score)
    const sc = score.filter((s) => {
        return s !== ''
    })
    
    let NumberScore = sc.map((el) => {
        return Number(el)
    })
    console.log(NumberScore);
    const myarr =  [];
    // ,S,D*,T
    for(let i = 0; i< str.length; i++) {
        // i = 0 ? 
        if(str[i] !== ',') {
            if(str[i] === '*' ) {
                myarr.pop()
                myarr.push(str[i-1]+'*')
            }else if(str[i] === '#') {
                myarr.pop()
                myarr.push(str[i-1]+'#')
            }else {
                     myarr.push(str[i])
                
            }
        } 
    }
    console.log(myarr)

    myarr.map((el, idx) => {
        arr[idx] = ([NumberScore[idx], el]);
    })
    
    // [[1,S],[2,D*],[3T]]
    console.log(arr)
    
    // Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 
    // 점수에서  1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.  
    
    //점수계산
    //[1,S]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][1].length === 1) {  
          if(arr[i][1] ==='S') {
             answer[i] = Math.pow(arr[i][0], 1)
          } else if(arr[i][1] ==='D') {
             answer[i] = Math.pow(arr[i][0], 2)
          } else if(arr[i][1] ==='T') {
             answer[i] = Math.pow(arr[i][0], 3)
          }
       
        }else {
          if(arr[i][1][1] === '#') {

            if(arr[i][1][0] === 'S') {
                answer[i] = Math.pow(arr[i][0], 1) * -1
                  console.log( Math.pow(arr[i][0], 1) * -1)
             }else if(arr[i][1][0] === 'D') {
                answer[i] = Math.pow(arr[i][0], 2) * -1
                  console.log(answer[i])
             }else if(arr[i][1][0]  === 'T') {
                answer[i] = Math.pow(arr[i][0], 3) * -1
             }       
          } else if(arr[i][1][1] === '*'){
             if(i !== 0) {
                 if(arr[i][1][0] === 'S') {
                      answer[i-1] *=  2
                     answer[i] = Math.pow(arr[i][0], 1) * 2
                 }else if(arr[i][1][0] === 'D') {
                     console.log(answer[i-1]);
                     answer[i-1] *= 2
                     answer[i] = Math.pow(arr[i][0], 2) * 2
                 }else if(arr[i][1][0]  === 'T') {
                      answer[i-1] *= 2
                     answer[i] = Math.pow(arr[i][0], 3) * 2
                 }
             } else {
                  if(arr[i][1][0]  === 'S') {
                     answer[i] = Math.pow(arr[i][0], 1) * 2
                 }else if(arr[i][1][0]  === 'D') {
                      answer[i] = Math.pow(arr[i][0], 2) * 2
                 }else if(arr[i][1][0]  === 'T') {
                      answer[i] = Math.pow(arr[i][0], 3) * 2
                 }
             } 
          }
        }
    }


    return answer.reduce((acc, cur) =>{
        return acc+cur
    })
    
        
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
