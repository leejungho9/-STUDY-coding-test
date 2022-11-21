function solution(nums) {
    var answer = 0;
    
    
    // n 마리의 포켓몬 중에서 n/2 마리를 가져갈 수 있음
    // 4마리의 포켓몬 종류 번호가 [3,1,2,3] 이라면 
    // 최대한 많은 종류의 포켓몬을 선택해야함
    
    
    // set객체 생성
    let mySet = new Set();
    
    //nums 돌면서 중복 없애기
    nums.map((num) => {
        mySet.add(num) 
    })
    
    //배열에 담아줌
    let myarr = [...mySet];
    
    // nums배열의 길이를 2로 나눈 값보다 myarr의 길이가 크거나 같다면
 
    if(nums.length /2 > myarr.length) {
        return myarr.length;
    }   
        return nums.length / 2;
    
}
    //[3,1,2,3] => [3,1,2] 
    //[3,3,3,2,2,4] => [3,2,1]
    //[3,3,3,2,2,2] => [3,2]

    // [3,1,2,3] ==== myarr : [3,1,2]
    // nums.length 2 >= myarr.length 3
    
    // [3,3,3,2,2,2] ==== myarr : [3, 2 ]
    // nums.length 2 >= myarr.length 3
