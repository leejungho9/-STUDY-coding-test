function solution(array, height) {
   
   let result =  array.filter((el) => {
      return   el > height;
    })
   
   return result.length;
}