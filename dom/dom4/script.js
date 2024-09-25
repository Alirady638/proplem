
function rotateDiv() {
    let input = document.getElementById("x")
    let value = input.value
    let div = document.getElementById("d")
    let rotateValue = "rotate(" + value + "deg)"
    div.style.transform = rotateValue
}