function mod( a, b ) {
    let result = 0
    for( ; true ; ) {
        if(!Number.isInteger( a / b )) {
            a -= 1
            result += 1
        }
        else {
            break
        }
    }
    return result
}



console.log( mod(5, 2) ) 

console.log( mod(218, 5) ) 

console.log( mod(6, 3) ) 