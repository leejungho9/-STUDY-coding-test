function solution(a, b, c) {
    var answer = 0;
    let numArr = [a,b,c];
    
    
  
    const setArr = new Set(numArr);
    if(setArr.size === 3) {
        return a+b+c;
    }else if(setArr.size === 2){
        return (a+b+c)*(a**2+b**2+c**2);
    }else if(setArr.size === 1){
        return (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3);   
    }
    

}