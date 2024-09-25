

function arithmeticProgression(first, diff, count) {
    let arr = []
    let current = first
    for (let i = 0; i < count; i++) {
        arr.push(current)
        current += diff
    }
    return arr.join(", ")
}


console.log(arithmeticProgression(1, 2, 5)) 

console.log(arithmeticProgression(1, 0, 5)) 

console.log(arithmeticProgression(1, -3, 10)) 