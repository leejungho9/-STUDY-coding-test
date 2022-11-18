function solution(s) {
    var answer = 0; 
    //단어를 배열 words에 다 다 담아둠 
    let words = ['zero', 'one', 'two',  'three', 'four' , 'five', 'six',  'seven', 'eight', 'nine']
  
   //숫자 단어만큼 반복
   words.map((word, i) => {
    //숫자 단어가 문자열에 포함된다면 즉시 split으로 잘라주고 다시 join(i) 으로 붙여줌 그리고 다시 s에 대입   
    //word = zero / i = 0 , word = one / i =1
      s = s.split(word).join(i)
      //마지막에 다 끝나면 answer에 s 대입 
      answer = s

   })
    return  Number(answer); //숫자형으로 바꿔 리턴
}


//원래 객체로 words를 만들고 replace 사용하고 싶었지만,, 어려움