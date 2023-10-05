function solution(my_string) {
 
    const regex =  /[0-9]/g;
    const result = my_string.match(regex)
   
    return result.reduce((acc, cur) => {
         return  Number(acc) + Number(cur)
    }, 0)
}