

// 두 수의 최소공배수로 나온 값을 또 다음 수와 최소 공배수를 구하는 식으로 반복하면 
// 배열의 마지막의 최소공배수가 이 N 개의 최소공배수가 된다!

//[2,6,8,14]
function solution(arr) {
    let result = arr[0]  //arr[0] 값인 2를 먼저 담아두고 시작

    for(let i = 1; i < arr.length; i++) {
        result = getLcm(result, arr[i])
    }
    return result

}

 

// 최소공배수 구하는 법 =  A * B / 최대공약수
function getLcm(A,B) {
    return (A*B) /getGcd(A, B)
    // 2*6 / 2
    // 12 / 2
    // 6  
}

// 유클리드 호제법으로 두 수의 최대공약수를 구하기
// A와 B 를 나눈 나머지(R1)를 구한다. 이때 나머지가 0이라면 B가 최대공약수
// B와 나머지(R1)를 나눠 (R2)를 구한다.
// R(1)과 R(2)를 나눈 나머지 (R3)를 구한다.
// 이 과정을 어느 한쪽이 나누어 떨어질 때까지 반복

function getGcd(A, B) {
    if(B === 0) { 
        return A; 
    }
 
    return getGcd(B, A % B); 
    //1 .  getGcd (6, 2 % 6 = 2);
    //2.   getGcd( 2, 6 % 2 = 0);  
    //return 2


}
