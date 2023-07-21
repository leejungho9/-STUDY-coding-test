function solution(my_string) {

    let result = my_string;
    
    for(let i = 0; i < my_string.length; i++) {
        let s = my_string[i]
    
        if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s ===  'u') {
            result =  result.replace(my_string[i], '');
        }
    }

    return result;
}