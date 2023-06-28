function solution(num_list) {
    var answer = '';
    let odd = '';
    let even = '';
    num_list.map((el) => {
         el % 2 === 1 ? odd += el : even += el;
    })

    
    return Number(odd) + Number(even);
}