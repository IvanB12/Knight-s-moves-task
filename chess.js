let chessBoard = document.createElement('div');
document.body.appendChild(chessBoard);
chessBoard.classList.add('chessBoard')


for (let i = 1; i<65; i++ ){
  let cell = document.createElement('div');
  chessBoard.appendChild(cell)
  cell.classList.add('cell')
}

let cell = document.getElementsByClassName('cell')
console.log(cell)

let x=1, y=8;
for (i=0; i<cell.length; i++){
  if(x>8){
    x=1;
    y--;
  }
  cell[i].setAttribute('posX', x)
  cell[i].setAttribute('posY', y)
  x++;
if ((i%2==0 && y%2==0) || (i%2!=0 && y%2!=0)){
  cell[i].style.backgroundColor="brown"

}
else{
  cell[i].style.backgroundColor="rgb(	255, 253, 208)"
} 
}
let a = Math.round(Math.random()*63);// variable for a position of knight
cell[a].classList.add('currentPosition', 'set')


let step =1;
cell[a].innerHTML = step;

let currentX= cell[a].getAttribute('posX')
let currentY=cell[a].getAttribute('posY')
console.log(currentX, currentY)

function knightMove(){

}

