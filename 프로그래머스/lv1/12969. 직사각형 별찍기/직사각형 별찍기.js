process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    // 결과물을 담을 변수 asnwer 생성
    // 첫번째 반복문은 0부터 b까지 반복
    // 두번째 반복문은 0부터 a까지 반복
    // 두번째 반복문이 끝나면 \n 을 넣어 줄바꿈 처리
    
    let answer = '';
    
    for(let i = 0; i < b; i++) {
        for(let j = 0; j < a; j++) {
            answer+= '*';
        }
        answer+=  '\n';
    }
    
   return console.log(answer)
});

