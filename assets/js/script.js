const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".option . playerX"),
selectBtnO = selectBox.querySelector(".option .playerO"), 
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll(".section span"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("buuton");

window.onload = ()=>{
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("oneclick", "clicked Box(this)");
    }
}

selectBtnX.onclick = ()=>{
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
}

selectBtnO.onclick = ()=>{
    selectBox.classList.add("hide");
    playBoard.classList.add("show")
    players.setAttribute("class", "players active player")
};

let playerXIcon = "fas fa-times",
playerOIcon = "far fa-circle",
playerSign = "X",
runBot = true;

function clickedBox(element){
    if(players.classList.contains("player")){
        playerSign = "O"
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        element.setAtribute("id", playerSign);
        players.classList.add("active");
    }
    selectwinner();
    element.style.pointerEvents = "none";
    playerBoard.style.pointerEvent = "none";
    let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(()=>{
        bot(runBot);
    }, randomTimeDelay);
}

function bot(){
    let array = [];
    if(runBot){
        playerSign = "O";
        for (let i = 0; i < allBox.length; i++){
            if(allBox[i].childElementCount == 0){
                array.push(i);
            }
        }
    }
}