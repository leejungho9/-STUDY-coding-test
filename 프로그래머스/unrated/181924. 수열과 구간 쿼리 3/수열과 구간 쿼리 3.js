function solution(arr, queries) {
    var answer = [];
    
    return queries.reduce((acc, cur, idx, origin)=> {
    
    const [first, second] = cur;
         
    [arr[first], arr[second]] = [arr[second], arr[first]];
    
    return arr

    }, 0)
   
}