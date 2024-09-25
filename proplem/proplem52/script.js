function keyboardMistakes(text) {
     let replced = ""
        for (let letter of text) {
          if (letter == 0) replced += "O"
          else if (letter == 1) replced += "I"
          else if (letter == 4) replced += "A"
          else if (letter == 5) replced += "S"
          else replced += letter
      }
     return replced
    }






console.log(keyboardMistakes("MUB45H1R"))

console.log(keyboardMistakes("DUBL1N"))

console.log(keyboardMistakes("51NG4P0RE")) 
