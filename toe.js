let btn1 = document.querySelectorAll(".box");
let nGame = document.querySelector("#nGame");
let reset = document.querySelector("#reset");
let hide = document.querySelector(".hide");
let msg = document.querySelector(".msg");
let turnX = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];



btn1.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnX === true){
            box.innerText = ("X");
            box.style.color = "red";
            turnX = false;
        }else{
            box.innerText = ("O");
            box.style.color = "blue";
            turnX = true;
        }
        box.disabled = true;
        
        checkWinner()
        
    })
})
// to stop the game after winner is found
const disabledbtn = () =>{
    for(let box of btn1){
        box.disabled = true;
    }
}

// to restart the game by pressing new game or reset btn
const enabledbtn = () =>{
    for(let box of btn1){
        box.disabled = false;
        box.innerText = "";
    }
}

// to reset the game 
const resetGame = () =>{
    turnX = true;
    enabledbtn();
    hide.classList.add("hide");
}
const showWinner = (winner) =>{
    // hide.setAttribute("class","come");
    hide.classList.remove("hide");
    msg.innerText = (`Congratulation, Winner is ${winner}`);
    disabledbtn();

}

const checkWinner = () =>{
    for (let pattern of winPatterns){
        // console.log(
            //     btn1[pattern[0]].innerText,
            //     btn1[pattern[1]].innerText,
            //     btn1[pattern[2]].innerText);
            let pos1val = btn1[pattern[0]].innerText;
            let pos2val = btn1[pattern[1]].innerText;
            let pos3val = btn1[pattern[2]].innerText;
            
            if(pos1val !== "" && pos2val !== "" && pos3val !=="" ){
                if(pos1val === pos2val && pos2val === pos3val){
                    // console.log(`winner is ${pos1val}`);
                    showWinner(pos1val);
                }
            }
        }
    };
nGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);