function solution(nums) {
    let answer = 0;

    // 삼중 for문을 사용해  i, j ,l 세 개의 변수  사용
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let l = j+1; l < nums.length; l++) {
                      
                //.. 차례대로 l 반복끝나면 j 반복 끝나면 i 반복해서 세개씩 다 더하기
                const sum = nums[i] + nums[j] + nums[l];
                //각각 세개씩 더한 값임 sum이 소수인지 아닌지 isPrime을 통해 판별
                if(isPrime(sum)){ 
                     answer++; //맞다면 answer ++;
                }
    
            }
        }
    }
    return answer;
}

function isPrime(sum) {
    for(let i = 2; i < sum; i++)
    //2부터 자기 sum 전 까지 반복
    //자기 자신 외에는 자연수로 나누어 떨어지면 소수 아니니까 false 
    if(sum % i === 0){
         return false;
    }
    return true;
}