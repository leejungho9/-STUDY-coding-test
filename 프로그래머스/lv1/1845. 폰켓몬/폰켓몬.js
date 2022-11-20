function solution(nums) {
    var answer = 0;
    
    
    // n 마리의 포켓몬 중에서 n/2 마리를 가져갈 수 있음
    // 4마리의 포켓몬 종류 번호가 [3,1,2,3] 이라면 
    // 최대한 많은 종류의 포켓몬을 선택해야함
    let mySet = new Set();
    let arr = [];
    
    nums.map((num) => {
        mySet.add(num) 
    })
    
    
    mySet.forEach((obj)=> {
        arr.push(obj)
    })
    
    if(nums.length /2 >= arr.length) {
        return arr.length;
    }   
        return nums.length /2;
    
}

