function solution(a, b, n) {
    // a : 가져와야 하는 빈병의 수
    // b : 빈병이랑 바꿔주는 콜라 수
    // n : 내가 가진 빈 병
    
    
    // 콜라 빈병 20개 -> 콜라 10개
    // 콜라 빈병 10개 -> 콜라 5병   // 한 병 킵
    // 콜라 빈병 5개  -> 콜라 2병
    // 콜라 빈병 2개  -> 콜라 1병   
    // 킵한콜라 1개 + 빈병 1개 -> 1병
    let countCoke = 0;

    // 내가 가진 병이 가져가야 하는 빈 병의 수보다 같거나 클 때 반복
    while( n >= a){
      let returnCoke = Math.floor(n/a)*b; //  다시 받는 콜라의 수 (소수점은 버리게)
      countCoke += returnCoke  // 지금까지 받은 콜라의 수 
      n = returnCoke  + n%a  // 다시받는 콜라의 수 + 내가 가진 병과 가져가야 하는 빈 병을 나눈 나머지 (나머지가 있다면 다시 더해줘야함)
      // n =  10 5 3 2 1
    }
    return countCoke 
}



