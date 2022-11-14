function solution(arr)
{
    var answer = [];

    // 0부터 arr의 길이만큼 반복
    // arr[i] 와 arr[i+1] 비교
    // 같지 않다면 answer에 push
    
   for(let i = 0; i < arr.length; i++){
       if(arr[i] !== arr[i+1]) {
           answer.push(arr[i])
       }
   }
    
    return answer;
}
