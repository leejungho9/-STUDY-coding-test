function solution(brown, yellow) {


    // 가로 * 세로  
    // 12 * 1 = 12 (세로는 3줄 이상이어야 하니까 안돼)
    // 6 * 2  = 12 (후보1)
    // 4 * 3  = 12 (후보2)
    // 3 * 4  = 12 ( 세로가 더 크니까 안돼)
    // 2 * 6  = 12 ( 세로가 더 크니까 안돼)
    // 1 * 12 = 12 ( 세로가 더 크니까 안돼)

    //  [8,3] 일때 
    // B B B B B B B B
    // B Y Y Y Y Y Y B
    // B B B B B B B B

   let size = brown + yellow
    for (let i = size; i >= 0; i--) {
        const size_list = [];
        if (size % i === 0) {
            size_list.push( i, size / i)          //가로 = i , 세로 = size/ i 
            if((i-2) * (size/i -2)=== yellow) {   //yellow 수 구하는 법 : (가로 - 2) * (세로 -2) 
                return [i, size/i]
            }
        } 
    }

}
