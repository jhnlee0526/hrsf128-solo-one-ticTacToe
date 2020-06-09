// set player's turn (default : playerX)
var state = 'playerX';
var board;
var str;
var winningCombs = ['012', '345', '678', '036', '147', '258', '048', '246'];

// add click event to cells
var cell = document.getElementsByClassName('cell');
for(var i=0; i<cell.length; i++){
  var current = cell[i];
  // console.log(current);

  // var count = 0;
  current.addEventListener("click", selectingCell);
}

// function for reset the game
function reset () {
  // count = 0;

  str = '';
  // console.log('reset');
  board = [
    '','','',
    '','','',
    '','',''
  ];
  // console.log(board);

  for(var i=0; i<cell.length; i++){
    // remove all the mark from cell
    var current = cell[i];
    current.innerHTML = '';
    // remove color from cell
    if (state === 'playerX' || state === 'playerO') {
      current.classList.remove('x');
      current.classList.remove('o');
    }
    // reset the state back to playerX
    state = 'playerX';
  }
}
// start resetting before starting a new game
reset();


// function for selecting and marking cells
function selectingCell(e){

  // if(count < 9){
  //   count++;
  // }
  // console.log('count: ', count);


  // variable for selected/clicked cell
  var selectedCell = e.target;
  // console.log('test!', selectedCell.id);

  var mark = document.getElementById(selectedCell.id).innerHTML;
  // if it has a mark already
  if (mark === 'X' || mark === 'O') {
    // just return without doing anything
    return;
  } else {
    if(state === 'playerX'){
      // get change the text for the selectedCell
      document.getElementById(selectedCell.id).innerHTML = 'X';
      // change color by adding class 'selected'
      selectedCell.classList.add('x');
      board[selectedCell.id] = 'x';
    } else {
      document.getElementById(selectedCell.id).innerHTML = 'O';
      selectedCell.classList.add('o');
      board[selectedCell.id] = 'o';
    }

  }
  // change the players' turn
  state === 'playerX' ? state = 'playerO' : state = 'playerX';


  // // if all the spot is taken,
  // if (count === 9) {
  //   // figure out who win by invoking selectingWinner
  //   selectingWinner();
  // } else

}



// function for figure out winner
function selectingWinner() {

  str = '';
  for (let i=0; i<board.length; i++) {
    if(board[i] === 'x') {
      str += i;
    }
  }
  console.log('str : ', str);

}


