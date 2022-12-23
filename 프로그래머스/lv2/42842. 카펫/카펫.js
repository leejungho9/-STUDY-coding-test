function solution(brown, yellow) {
    let answer = [];

    //카페의 가로 길이는 세로 길이와 같거나, 세로 길이보다 길다 . 가로 >= 세로
    let size = brown + yellow


    // size 가 12 니까 size의 약수를 구하자  

    // 가로 * 세로  
    // 12 * 1 = 12 (세로는 3줄 이상이어야 하니까 안돼)
    // 6 * 2  = 12 (후보1)
    // 4 * 3  = 12 (후보2)
    // 3 * 4  = 12 ( 세로가 더 크니까 안돼)
    // 2 * 6  = 12 ( 세로가 더 크니까 안돼)
    // 1 * 12 = 12 ( 세로가 더 크니까 안돼)

    // size가 9니까 
    // 9 * 1 = 9
    // 3 * 3 = 9
    

    for (let i = size; i >= 0; i--) {
        const size_list = []
        if (size % i === 0) { // size에서 i를 나눴을 때 0이 되면 약수가 배열에 넣기
            size_list.push(i, size / i )

            if((i-2) * (size/i -2)=== yellow) { 
                return [i, size/i]
            }
        } 
    }

}


// function solution(brown, yellow) {
//     size = brown + yellow;
    
//     for(let i = Math.floor(size/2); i > 0; i--) {
//         if(size % i !== 0 ) continue;
        
//         width = i;
//         height = size/i;
//             console.log(width, height)
//         if((width -2) * (height-2) === yellow) {
//             return [width , height]
//         }
//     }
// }