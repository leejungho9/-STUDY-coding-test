function solution(num_list) {
    let last = num_list.length - 1 ;
    let second = num_list.length - 2;
    
    if(num_list[last] > num_list[second]) {
        return [...num_list, num_list[last] - num_list[second]]
    }else {
        return [...num_list,num_list[last]*2]
    }
}