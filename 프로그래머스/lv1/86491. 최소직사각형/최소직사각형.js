function solution(sizes) {
    var answer = 0;
    let width  = 0;
    let height = 0;
    
    
    sizes.forEach((size) => {
      const [a,b]  = size.sort((a,b) => a-b)
      console.log(a,b)
      if(b > width) {
          width = b;
      }
      if(a > height) {
          height = a;
      }
 
    })
    
    return width*height;
}