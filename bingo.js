/*
BINGO CHALLENGE!!!
Create programmatically (with JS) a BINGO board with 76 cells, from 1 to 76.
Create a button to randomize a number from 1 to 76. The same number should be highlighted on the bingo board

EXTRA: 
- Take ALWAYS a new number (eg. avoid randoming the number 10 3 times)
- Create a USER BOARD with 24 randomized numbers that highlights as the main board does
- Let the user choose HOW MANY user boards he's willing to play with and create them.
*/
 
 
 
 
 function displayEntireBingo(){
  // TODO: Display entire 76 cells of Bingo
 let bingoContainer = document.getElementById("bingo-container")


 for (let bingoNumber = 1; bingoNumber <= 76; bingoNumber++) {
      let newBingoNode = document.createElement("div")
      newBingoNode.innerText = bingoNumber
      newBingoNode.id = bingoNumber
      newBingoNode.classList.add("number")
      bingoContainer.appendChild(newBingoNode)
 }
 }


// const makeBoard = function (){

//     let bingo = document.getElementById('bingo-container')
    
//         for (let i = 0; i <= 75; i++) {
//             let create = document.createElement("div")
//             create.innerHTML = i
//             create.id = i
//             bingo.appendChild(create)
//         }
// }





window.onload = function() {
    displayEntireBingo() 
} 
