/*
BINGO CHALLENGE!!!
Create programmatically (with JS) a BINGO board with 76 cells, from 1 to 76.
Create a button to randomize a number from 1 to 76. The same number should be highlighted on the bingo board

EXTRA: 
- Take ALWAYS a new number (eg. avoid randoming the number 10 3 times)
- Create a USER BOARD with 24 randomized numbers that highlights as the main board does
- Let the user choose HOW MANY user boards he's willing to play with and create them.
*/
 
 
 
 
function displayEntireBingo()
  // TODO: Display entire 76 cells of Bingo
let bingoContainer = document.getElementById("bingo-container")


for (let bingoNumber = 1; bingoNumber <= 77; bingoNumber++) {
     let newBingoNode = document.createElement("div")
     newBingoNode.innerText = bingoNumber
     newBingoNode.id = bingoNumber
     

     bingoContainer.appendChild(newBingoNode)
}


function randomNumber(){

    let randomNumber = Math.floor(Math.random()*80)
    return randomNumber
    
}






    window.onload = function() {
        displayEntireBingo()
    } 
