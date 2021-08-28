// 

// Generate Bingo Board

function displayEntireBingo(){
    // TODO: Display entire 76 cells of Bingo
   let bingoContainer = document.getElementById("bingoboard")
  
  
   for (let bingoNumber = 0; bingoNumber <= 76; bingoNumber++) {
        let newBingoNode = document.createElement("div")
        newBingoNode.innerText = bingoNumber
        newBingoNode.id = bingoNumber
        newBingoNode.classList.add("number")
        bingoContainer.appendChild(newBingoNode)
        
   }
  }