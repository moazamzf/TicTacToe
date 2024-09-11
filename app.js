let cells = document.querySelectorAll(".cell");
let message = document.querySelector("#status");
let reset = document.querySelector("#reset");
let turn = true;
let winpattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

cells.forEach((cell)=>{
  cell.addEventListener("click",()=>{
    if(turn){
      turn = false;
      cell.innerText = "X";
    }else{      
      turn = true;
      cell.disable = true;
      cell.innerText = "O";
    }
    cell.disabled = true;

      checkwinner();
  })
})


checkwinner = ()=>{
  for(pattern of winpattern){
        let pos1 = cells[pattern[0]].innerText;
        let pos2 = cells[pattern[1]].innerText;
        let pos3 = cells[pattern[2]].innerText; 

        if( pos1!="" && pos2!="" && pos3!="" ){
          if( pos1==pos2 && pos2==pos3 ){
            message.innerText = `Player's ${pos1} Wins yeaaa`;
            cells.forEach((e)=>{
              e.disabled=true;
            })
          }
        }
  }
  }

reset.addEventListener("click",()=>{
  cells.forEach((e)=>{
    e.disabled=false;
    e.innerText = null;
    message.innerText = null;
  })
})