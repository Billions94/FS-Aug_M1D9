
function displayEntireBingo()
  // TODO: Display entire 76 cells of Bingo
let entireBingoNode = document.getElementById("bingo-container")

for (let bingoNumber = 1; bingoNumber <= 76; bingoNumber++) {
    let newBingoNumber = document.createElement("div")
    newBingoNumber.innerText = bingoNumber
    newBingoNumber.id = bingoNumber

    entireBingoNode.appendChild(newBingoNumber)
}









    window.onload = function() {
        displayEntireBingo()



    }
