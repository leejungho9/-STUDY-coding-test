function solution(clothes) {
    const map = new Map();

    let count = 1;
    //옷의 종류가 이미 map에 있는지 아닌지 확인
    //종류가 없다면 map에 추가 
    //종류가 있다면 해당 종류 +1 

    for(let cloth of clothes) {
        if(map.has(cloth[1])){ 
            map.set(cloth[1], map.get(cloth[1]) + 1)
        }else {
            map.set(cloth[1], 1);
        }
    }
    
    //Map에 담긴 값을 꺼내서 둘 다 미착용(+1) 의 경우까지 더하고 count 랑 곱한 값을 넣어줌
    for(let m of map.values()){
        count *= (m+1);
    }   
    //아예 아무것도 안입었을 시 경우의 수..제외해주기
    return count -1;
    
    
    // headgear 2개일 때  경우의 수[yellow_hat, green_turban ]
    //1. yellow_hat 착용
    //2. green_turban 착용
    //3. 둘 다 미착용
   
 }
