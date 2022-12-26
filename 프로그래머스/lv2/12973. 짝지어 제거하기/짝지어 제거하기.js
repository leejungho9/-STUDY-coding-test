function solution(s){
    s = s.split("")
    const arr = [s[0]]; //arr 에 초기값으로 첫번째 알파벳 넣어주기
    for(let i= 1; i < s.length; i++){  
        //예)  ['b']  === 'a' ====>  ['b', 'a'] 
        //     ['a']  === 'a' ====>  ['b']
        if(arr[arr.length-1] === s[i] ){ //arr마지막 값과 들어오는 알파벳 값 비교,  같으면 arr에 들어있는 값을 pop()으로 지움, 같지 않으면 push해서 알파벳 넣어줌
            arr.pop();                   
        }else {                            
            arr.push(s[i])               
        }
    }
    return arr.length === 0 ? 1 : 0
}
