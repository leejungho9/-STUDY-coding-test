


function solution(n) {

    let length =  n.toString(2).split("").filter(el => el === '1').length 

    let i = n
    while(true) {
        i ++;
        let blength = i.toString(2).split("").filter(el => el === '1').length 

        if(length === blength ){
            return i 
        }
    }

}
