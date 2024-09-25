






function f1( string ) {
    let first = string.split(" ")[0]
    let opera = string.split(" ")[1]
    let last  = string.split(" ")[2]
    if( opera == "+" ) {
        return Number(first) + Number(last)
    }
    else if( opera == "-" ) {
        return Number(first) - Number(last)
    }
    else if( opera == "*" ) {
        return Number(first) * Number(last)
    }
    else if( opera == "/" ) {
        if( last == 0 ) {
            return -1
        }
        else {
            return Number(first) / Number(last)
        }
    }
}



console.log( f1("12 + 12") )

console.log( f1("12 - 12") )

console.log( f1("12 * 12") )

console.log( f1("12 / 0") )
        
    