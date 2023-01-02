function solution(cacheSize, cities) {
    let answer = 0;
    //LRU 알고리즘은 가장 오랫동안 사용하지 않은 페이지를 교체하는 알고리즘임
    //캐시의 사이즈가 0일 때
    if(cacheSize === 0) {
        return cities.length * 5;
    } 
    
    const cache=[];
    
    //[오래된순 ------ 최신순]
    //캐시가 있는 경우 :  캐시 배열에서 해당 값을 지우고 맨 뒤에 해당 값을 푸시
    //캐시가 없는 경우 :  캐시 배열에서 맨 앞의 값 (가장 오래된 값을) 제거 후 하고 맨 뒤에 city값을 push해줍니다.
   
   
    for(let i = 0; i < cities.length; i++) {
        cities[i] = cities[i].toUpperCase();

        if(cache.includes(cities[i])) {    
            cache.splice(cache.indexOf(cities[i]), 1);
            cache.push(cities[i]) 
            answer += 1;
        }else {

            if(cache.length === cacheSize) {
                cache.shift();
            }
            
            cache.push(cities[i]) 
            answer += 5;
        }
    
    }

    return answer;
}

