function solution(s) {


  

    s = s.split(' '); //['3people', 'unFollowed' , 'me']
    return  s.map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(' ');
    
     // 위 배열 map 돌아서 charAt() 첫 번째 인덱스 접근 '3', 'u', 'm' 대문자로 변환
    // 배열 요소의 첫번째 인덱스 제외하고 다 소문자 만들고 join
}