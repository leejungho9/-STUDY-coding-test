function solution(a, b) {
let max = 0;
    let num1 = a+'' + b+''
    let num2 = b+'' + a+'';
     num1> num2? max =  Number(num1) :max= Number(num2)
    return max

}