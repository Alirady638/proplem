function isRepdigit(num) {
    if(num < 0) return false
    let str = String(num)
    for(let digit of str) {
        if(digit != str[0]) return false
    }
    return true
}

console.log(isRepdigit(66)); 

console.log(isRepdigit(4444));

console.log(isRepdigit(0)); 

console.log(isRepdigit(191));

console.log(isRepdigit(-11));
