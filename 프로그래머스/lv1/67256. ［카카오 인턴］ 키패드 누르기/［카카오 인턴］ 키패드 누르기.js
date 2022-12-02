function solution(numbers, hand) {
    
    // 맨하탄 거리 계산 |x1 -x2| + |y1-y2| = 거리
    // 검색 찬스를 활용해 맨하탄의 거리 계산 공식을 찾아냄 ,,
    
    
    //각 번호에 맞는 좌표를 객체로 생성함
    const key = {
       1: [0,0], 2: [0,1], 3: [0,2],
       4: [1,0], 5: [1,1], 6: [1,2],
       7: [2,0], 8: [2,1], 9: [2,2],
       '*' : [3,0], 0 : [3,1] ,'#' : [3,2] 
    }   
    
    let left = '*';
    let right = '#';
    
    let answer = '';
     numbers.map((number, idx) => {
        if(number === 1 || number === 4 || number === 7 ) {        // 1, 4, 7 왼손
            answer+='L';
            left = number
        } else if(number === 3 || number === 6 || number === 9 ) {  // 3, 6, 9 오른손
            answer+= 'R';
            right = number
        } else {
            // 2,5,8,0 가운데 
            let coordinateR = key[right];   // 현재 오른손의 좌표 
            let coordinateL = key[left];    // 현재 왼손의 좌표
            let coordinateN = key[number];  // 눌러야 하는 숫자 좌표 
            let distanceR;                  // 오른손 거리 계산 결과
            let distanceL;                  // 왼손 거리 계산 결과
            
            //ex  오른손이 3라면 [0,2] 가 coordinateR에 담겨 있음 
            // coordinateR[0] === 0 coordinateR[1]  === 2 가 됨
            for(let i= 0; i < coordinateR.length; i++) {
                // 오른손의 위치와 눌러야하는 숫자의 거리 계산 
                // |오른손 숫자의 좌표[0] - 눌러야하는 숫자의 좌표[0]| +  |오른손 숫자의 좌표[1] - 눌러야하는 숫자의 좌표[1]|
                distanceR = Math.abs(coordinateR[0] - coordinateN[0]) + Math.abs(coordinateR[1] -coordinateN[1]); 
                distanceL =  Math.abs(key[left][0] - coordinateN[0]) + Math.abs(key[left][1] - coordinateN[1]);   
            }
            // 거리가 같다면 왼손잡이인지 오른손잡이인지 확인
            if(distanceR === distanceL) {
                if(hand === "right") {
                    answer += 'R'
                    right = number;
                }else if(hand=== "left") {
                    answer += 'L'    
                    left = number ; 
                }
            //오른손 거리가 길다면 왼손 넣어주기
            } else if(distanceR > distanceL){
                answer += 'L'    
                left = number ; 
            //왼손 거리가 길다면 오른손 넣어주기 
            } else if(distanceR < distanceL){
                answer += 'R'    
                right = number ; 
            }
        }  
     });
    return answer;
}








// 실패 코드 ===== 실패 요인 거리 계산이 제대로 안됐음 
// function solution(numbers, hand) {
//     var answer = '';
    
//     let left = '#';
//     let right = '*';
    
    
//     // 손가락이 key 숫자에 위치할 때 움직일 수 있는 곳 
//     let move = {
//         2 : [1,3,5],
//         5 : [2,4,6,8],
//         8 : [5,7,9,0],
//         0 : [8, '*','#']
//     }

//     //[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
//     numbers.map((number, idx) => {
//         if(number === 1 || number === 4 || number === 7 ) {
//             answer+='L';
//             left = number
//         }else if(number === 3 || number === 6 || number === 9 ) {
//             answer+= 'R';
//             right = number
//         } else { //2,5,8,0(가운데) 선택해야 할 때
            
//              //[L, R, L, [L], [L], [R], L, L, [R], R, L] : 답
//              //[1, 3, 4, [5], [8], [2], 1, 4, [5], 9, 5] : number
            
//             //현재 left 4 right 3
//             //선택해야할 숫자 5
//             if(move[number].includes(right) && move[number].includes(left)) { //left, right 둘 다 포함 ? hand값에 따라 넣어줌
//                 if(hand === "right") {
//                     answer += 'R'
//                     right = number;
//                 }else if(hand=== "left") {
//                     answer += 'L'    
//                     left = number ; 
//                 }
                
//             }
//             else if(move[number].includes(left)) { //left만 포함 ?
//                    answer+='L' ;
//                    left = number   
//             } else if(move[number].includes(right)) {//right만 포함 ?
//                   answer+='R';
//                   right = number    
//             }
          
//             else if(!move[number].includes(right) && ! move[number].includes(left)) { // 여기서 잘 못 된듯
//                 if(right !== 0 && left !== 0){
                    
//                     // [7, 0, 8, 2, 8, 3, 1, [5], 7, 6, 2]
//                     // [L, R, L, L, R, R, L, [R], L, R, R]  ==>나
//                     // [L, R, L, L, R, R, L, [L], L, R, R]  ==>답

//                     // 눌러야 하는 수 : 5

//                     // Left 위치 :  1
//                     // right 위치 : 3
                    
//                     //실패요인 : 거리를 계산해서 똑같은 거리라서 hand에 따라 값을 넣어줘야하는데 그걸 못함
//                     //걍 number- 마지막 손 위치 숫자 빼버리고 - 날린 후 적은 쪽 손으로 넣어줌 
//                     let prev_right = Math.abs(number-right)  //  5-3 == 2
//                     let prev_left = Math.abs(number-left)    //  5-1 == 4 
//                     if(prev_right > prev_left) {
//                         answer+='L' ;
//                         left = number   
//                     } else {
//                         answer+='R';
//                         right = number    
//                     }
//                  } // number가  5 or 2 일 경우만 들어오기 때문에 어던 손가락이 0에 위치하면 무조건 가까운 손은 그 반대임
//                  else if(right !== 0 && left === 0){ 
//                     answer+='R';
//                     right = number 
//                 }else  if(right === 0 && left !== 0){
//                     answer+='L';
//                     left = number 
//                 }
//             }

      
//         }
//     })

//     return answer;
// }