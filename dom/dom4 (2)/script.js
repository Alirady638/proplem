function f1() {
    let button = document.getElementById("b")
    if (button.innerHTML === "show") {
        button.innerHTML = "hide"
        button.style.backgroundColor ="green" 
        let h1 = document.getElementById("h")
        h1.style.display = "block"
    }
    else{
        button.innerHTML = "show"
         button.style.backgroundColor ="red"
         let h1 = document.getElementById("h")
          h1.style.display = "none"
    }
}