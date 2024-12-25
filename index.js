let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("p");
let playerX = document.querySelector(".winnerX");
let xScore = 0;
let playerO = document.querySelector(".winnerO");
let oScore = 0;
let reset = document.querySelector(".reset");
let turnX = true;

let patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
]




boxes.forEach((box) => {
    box.addEventListener(("click"), () =>{
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of patterns){
        let pose1 = boxes[pattern[0]].innerText;
        let pose2 = boxes[pattern[1]].innerText;
        let pose3 = boxes[pattern[2]].innerText;
        if(pose1 === "X" && pose2 ==="X" && pose3==="X"){
            showWinner("X");
            xScore += 1;
            playerX.innerText = xScore;
        }
        else if(pose1 === "O" && pose2 ==="O" && pose3==="O"){
            showWinner("O");
            oScore += 1;
            playerO.innerText = oScore;
        }
    }
    
}

const showWinner = (e) => {
    msg.innerText = `${e} is Winner..!`;
    boxDisabled();
    msg.classList.remove("hide");
}

const boxDisabled = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const boxEnabled = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnX = true;
    boxEnabled();
    msg.classList.add("hide");
}

reset.addEventListener("click", resetGame);