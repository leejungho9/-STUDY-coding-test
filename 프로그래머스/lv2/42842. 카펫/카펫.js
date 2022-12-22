function solution(brown, yellow) {
    let answer = [];

    //카페의 가로 길이는 세로 길이와 같거나, 세로 길이보다 길다 . 가로 >= 세로
    let size = brown + yellow
    
    // 가로 6 세로 6 부터 ..
    // 가로 7 세로 5
    // 가로 8 세로 4
    // 가로 9 세로 3
    // yellow가 중앙에 있어야 하니까 세로 3줄은 있어야 함 



    // size 가 12 니까 

    // 가로 * 세로 
    // 12 * 1 = 12 (세로는 3줄 이상이어야 하니까 안돼)
    // 6 * 2  = 12   후보1
    // 4 * 3  = 12   후보2

    // --- 세로가 더 크니까 안돼 ----
    // 3 * 4  = 12
    // 2 * 6 = 12
    // 1 * 12 = 12


    //[[3,4], [2,6]]
    let half_size =  Math.floor(size / 2)
    
    let width ;
    let height ; 

    const arr = []

    for (let i = half_size; i >= 0; i--) {
        const size_list = []
        if (size % i === 0) {
        
            size_list.push(i, size / i )
         
            if(i>= size / i ){
                arr.push(size_list)
            }
        } 

    }
    
    arr

    arr.forEach(el => {
        (el[0]-2) * (el[1]-2) === yellow ? answer = el : null;
    })

    return answer


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