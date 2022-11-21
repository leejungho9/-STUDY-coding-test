function solution(nums) {

    
    
    // 문제를 제대로 이해하지는 못했지만, 입출력 예시를 봤을 때 
    // 1번 케이스를 제외하고 중복값을 제외한 후 배열의 길이가 result 인 것을 확인했음
    // 1번 같이 예외인 케이스만 조건주면 될 듯 ? 
    
    
    // set객체로 nums의 중복값 없애고 myarr 이라는 새로운 배열에 담기
    let mySet = new Set(nums);
    let myarr = [...mySet];
    
    // nums 길이를 2로 나눈 값보다 중복값 제외한 myarr의 길이가 더 크다면? (1번 케이스)

    if(nums.length / 2 <  myarr.length) {
        return nums.length / 2;
    }   
        return myarr.length;
    
}

