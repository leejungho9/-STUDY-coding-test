function solution(n, m) {
    var answer = [];
    let max = 0;
    let gcf = 0; // 최대공약수 : 두 수를 완벽히 나누어 떨어지게 할 수 있는 제일 큰 수
    let lcm = 0; // 최소공배수 : 두 수의 공통적인 배수를 공배수라고 하는데 공배수 중에서 제일 작은 수 
    
    n > m ? max = n : max = m
    
 for(let i = 1; i < max; i++) {
    if (n % i === 0 && m % i === 0) {
        gcf = i;
  }
     lcm =  (n * m) / gcf
 }
     
 
    
  answer.push(gcf, lcm);
  return answer;
}


