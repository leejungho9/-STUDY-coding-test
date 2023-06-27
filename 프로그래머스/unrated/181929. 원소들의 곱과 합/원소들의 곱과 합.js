function solution(num_list) {

    let sumFun = num_list.reduce((arr, cur) => {
        return arr + cur;
    })
    
     let multiplFun = num_list.reduce((arr, cur) => {
        return arr * cur;
    })
    
   return multiplFun > sumFun**2 ? 0 : 1;
   
}