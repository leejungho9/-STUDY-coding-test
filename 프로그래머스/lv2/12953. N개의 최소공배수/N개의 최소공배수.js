
// 유클리드 호제법으로 두 수의 최대공약수를 구하기
// A와 B 를 나눈 나머지(R1)를 구한다. 이때 나머지가 0이라면 B가 최대공약수
// B와 나머지(R1)를 나눠 (R2)를 구한다.
// R(1)과 R(2)를 나눈 나머지 (R3)를 구한다.
// 이 과정을 어느 한쪽이 나누어 떨어질 때까지 반복
 

// 최소공배수 구하는 법 =  두 수를 곱하고 / 그 수의 최대공약수
function getLcm(A,B) {
    return (A*B) /getGcd(A, B)
}

function getGcd(A, B) {
    if(B === 0) { //A % B이가 0인지 확인
        return A; //0이라면 전달받은 인자로 들어온 A(== B) 를 return
    }
    
    return getGcd(B, A % B);
}



// 배열의 마지막의 최소공배수가 이 N 개의 최소공배수가 된다!
function solution(arr) {
    let result = 1;

    for(let i = 0; i < arr.length; i++) {
        result = getLcm(result, arr[i])
    }
    return result

}


