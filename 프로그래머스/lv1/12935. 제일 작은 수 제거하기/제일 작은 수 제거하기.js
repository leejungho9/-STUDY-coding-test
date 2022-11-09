
function solution(arr) {
    
    //arr 에서 제일 작은 수 찾기
    let min = Math.min(...arr)
    
    //arr의 길이가 1이면 -1 리턴
    if(arr.length === 1) {
       return [-1];
    } 
    
    //arr 에서 indexOf를 통해 min의 인덱스 위치 찾고 splice로 해당 인덱스부터 1만큼 삭제
    arr.splice(arr.indexOf(min) ,1);
    return arr;
    
    //splice 메서드 : 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
}