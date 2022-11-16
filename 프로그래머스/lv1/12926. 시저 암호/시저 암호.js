function solution(s, n) {
    var answer = '';
    let ASKII = 0;
    let str = '';
    
// 32가 공백
// 65~90 영문 대문자
// 97~122 영문 소문자
    
//charCodeAt() : 문자를 아스키코드로 변환
//fromCharCode() : 아스키코드를 문자로 변환

    for(let i = 0; i < s.length; i++) {
        ASKII = s.charCodeAt(i)
        if(ASKII === 32) {
            answer += ' ';
        }else if(ASKII <= 90 && ASKII + n > 90 || ASKII + n > 122) {
             answer += String.fromCharCode(ASKII+n-26);
        }  else answer += String.fromCharCode(ASKII+n);
        
      
    } 
       
    return answer;
}


// if(s[0] === 'z' && n <= 1) {
//         answer = 'a';
//     } else if(s[0] === 'Z' && n <= 1) {
//         answer = 'A'
//     } else if(s[0] === ' '){
//         answer = ' '
//     }
//         for(let i = 0; i < s.length; i++ ){
//             ASKII = s.charCodeAt(i) + n;
//             answer += String.fromCharCode(ASKII) ;
//         }
    
//     }